// Formik
import { Field, ErrorMessage } from 'formik'

const TextField = ({ id, name }: { id: string; name: string }) => {
  return (
    <Field
      id={id}
      name={name}
      className='input bg-white text-black w-full h-[40px] mt-2'
    />
  )
}

const SelectField = ({
  id,
  name,
  options,
}: {
  id: string
  name: string
  options: string[] | undefined
}) => {
  return (
    <Field
      as='select'
      id={id}
      name={name}
      className='select bg-white text-black w-full h-[40px] mt-2 min-h-[40px]'
    >
      {options?.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Field>
  )
}

type Props = {
  label: string
  id: string
  size: 1 | 2
  isText: boolean
  options?: string[] | undefined
}

const CustomField = ({ label, id, size, isText, options }: Props) => {
  const labelStyle = 'text-white text-[14px] leading.[17px]'
  return (
    <div className={`${size === 1 ? 'col-span-1' : 'col-span-2'}`}>
      <label htmlFor={id} className={labelStyle}>
        {label}
      </label>
      {isText ? (
        <TextField id={id} name={id} />
      ) : (
        <SelectField id={id} name={id} options={options} />
      )}
      <ErrorMessage name={id} component='span' className='mt-1 text-primary' />
    </div>
  )
}

export default CustomField
