import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from 'react-ga'

export default function useImpressTracker() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname)
  }, [])
}