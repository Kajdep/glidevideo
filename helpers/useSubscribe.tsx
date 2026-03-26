import { useMutation } from "@tanstack/react-query";
import { postSubscribe, InputType, OutputType } from "../endpoints/subscribe_POST.schema";

interface UseSubscribeOptions {
  onSuccess?: (data: OutputType) => void;
  onError?: (error: Error) => void;
}

export const useSubscribe = (options?: UseSubscribeOptions) => {
  return useMutation({
    mutationFn: (data: InputType) => postSubscribe(data),
    onSuccess: (data) => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error);
      }
    },
  });
};