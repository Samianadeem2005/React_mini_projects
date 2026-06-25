import {useState, useEffect} from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/bb0802385b06e07abe858d68/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.conversion_rates || {}))
      .catch(() => setData({}))
  }, [currency])

  return data
}

export default useCurrencyInfo;