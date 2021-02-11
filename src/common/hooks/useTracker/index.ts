import { useCallback } from "react";
import ReactGA from 'react-ga'

type ActionTypes = 'click'
type CategoryTypes = 'profile' | 'project'

export default function useTracker() {
  const tracker = useCallback((category: CategoryTypes, action: ActionTypes, label: string) => {
    ReactGA.event({
      category,
      action,
      label
    })
  }, [])

  return tracker
}