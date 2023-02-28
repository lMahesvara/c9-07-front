const isAuth = async (token: string) => {
  const URL = process.env.API_URL + '/validacion'
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.error) {
      return false
    }
    return true
  } catch (error) {
    return false
  }
}

export default isAuth
