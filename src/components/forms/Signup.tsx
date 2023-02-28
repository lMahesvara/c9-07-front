// Formik
import { Formik, Form } from "formik"
// Schemas
import { registerSchema, initialValues } from "@/utils/schemas/registerSchema"
// Shared
import TextField from "@/components/shared/TextField"
import Submit from "@/components/shared/Submit"
// Types
import { Field } from "@/types/Field"
import { User } from "@/types/User"
// Next
import { useRouter } from "next/router"

const registerFields: Field[] = [
  {
    label: "Nombre",
    id: "name",
    type: "text",
  },
  {
    label: "Correo electrónico",
    id: "email",
    type: "text",
  },
  {
    label: "Contraseña",
    id: "password",
    type: "password",
  },
  {
    label: "Repetir Contraseña",
    id: "confPassword",
    type: "password",
  },
]

const Signup = () => {
  const router = useRouter()

  const handleSubmit = async (values: any, actions: any) => {
    actions.setSubmitting(false)

    const user: User = {
      user: values.name,
      email: values.email,
      password: values.password,
    }

    const URL = process.env.API_URL + "/registro"
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })

      const data = await res.json()

      if (data.error) {
        throw new Error(data.msg)
      }

      //add success tostify

      //redirect to login
      router.push("/login")

      //reset form
      actions.resetForm()
    } catch (error) {
      //add error tostify
      console.log(error)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form className="flex flex-col mt-8">
        {registerFields.map(field => (
          <div className="flex flex-col mb-4" key={field.label}>
            <label
              htmlFor={field.id}
              className="text-[14px] leading-[17px] text-white mb-2"
            >
              {field.label}
            </label>
            <TextField id={field.id} name={field.id} type={field.type} />
          </div>
        ))}
        <Submit label="Registrarse" />
      </Form>
    </Formik>
  )
}

export default Signup
