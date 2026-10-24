import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchShapes, saveShape as saveShapeApi, clearShapes as clearShapesApi } from '@/api/shapesApi'

const shapesKey = ['shapes']

export function useShapesQuery() {
  const queryClient = useQueryClient()

  const query = useQuery({
    queryKey: shapesKey,
    queryFn: fetchShapes,
    retry: 1,
  })

  const saveMutation = useMutation({
    mutationFn: (points) => saveShapeApi(points),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: shapesKey })
    },
  })

  const clearMutation = useMutation({
    mutationFn: clearShapesApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: shapesKey })
    },
  })

  return {
    shapes: Array.isArray(query.data) ? query.data : [],
    loading: query.isLoading,
    error: query.error,
    reload: () => query.refetch(),
    save: saveMutation.mutateAsync,
    saving: saveMutation.isPending,
    clear: clearMutation.mutateAsync,
    clearing: clearMutation.isPending,
  }
}
