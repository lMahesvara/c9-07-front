import { Field, ErrorMessage } from 'formik';

type Props = {
  id: string,
  name: string,
  type: string,
}

const TextField = (props: Props) => {
  return (
    <>
      <Field {...props} className="bg-text-primary rounded-lg border p-3 text-white"/>
      <ErrorMessage name={props.name} component="span" className='mt-1 text-primary'/>
    </>
  )
}

export default TextField