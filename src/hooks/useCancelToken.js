import axios from 'axios'

import { useRef } from 'react'

export default function useCancelToken() {
  const source = useRef(axios.CancelToken.source())
  const isCancelled = useRef(false);

  return {
    ...source.current,
    cancel() {
      source.current.cancel();
      isCancelled.current = true;
    },
    isCancelled() {
      return isCancelled.current;
    }
  }
}