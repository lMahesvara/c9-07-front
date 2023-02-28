// Formik
import { Formik, Form } from 'formik'
// Schemas
import { loginSchema, initialValues } from '@/utils/schemas/loginSchema'
// Shared
import TextField from '@/components/shared/TextField'
import Submit from '@/components/shared/Submit'
// Next
import Link from 'next/link'
import { useRouter } from 'next/router'
// Types
import { Field } from '@/types/Field'
import { useAuth } from '@/context/AuthContext'
//Cookies
import Cookies from 'js-cookie'

const loginFields: Field[] = [
  {
    label: 'Correo electrónico',
    id: 'email',
    type: 'text',
  },
  {
    label: 'Contraseña',
    id: 'password',
    type: 'password',
  },
]

const Login = () => {
  const router = useRouter()
  const { setAuth } = useAuth()

  const handleSubmit = async (values: any, actions: any) => {
    actions.setSubmitting(false)

    const user = {
      email: values.email,
      password: values.password,
    }

    const URL = process.env.API_URL + '/login'
    try {
      const res = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      console.log(values)
      const data = await res.json()
      console.log(data)

      if (data.error) {
        throw new Error(data.msg)
      }

      //save token in localstorage
      const { username, token } = data.msg
      setAuth(username, token)

      //save token in cookie
      Cookies.set('Authorization', token, { expires: 1, path: '/' })

      //add success tostify

      //redirect to home
      router.push('/')

      //reset form
      actions.resetForm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className='flex flex-col mt-8'>
        {loginFields.map(field => (
          <div className='flex flex-col mb-4' key={field.label}>
            <label
              htmlFor={field.id}
              className='text-[14px] leading-[17px] text-white mb-2'
            >
              {field.label}
            </label>
            <TextField id={field.id} name={field.id} type={field.type} />
          </div>
        ))}
        <Submit label='Iniciar sesión' />
        <p className='flex justify-center mt-5 text-white tracking-[-0.165px]'>
          ¿No tienes cuenta?&nbsp;
          <Link href='/register' className='underline'>
            Registrate
          </Link>
        </p>
      </Form>
    </Formik>
  )
}

export default Login
