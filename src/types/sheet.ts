export type SheetElement = {
  id: string,
  label: string,
  tag: string,
}

export type FormVals = { [key: string]: any }

export type SetFormVals = (formVals: FormVals) => void

export type InputStandardProps = {
  setFormVals: SetFormVals,
  formVals: FormVals,
  valPath: string[],
  label: string,
}
export type InputOverrideProps = {
  label: string,
  setOverride: (formVals: any) => void
}
export type InputProps = InputStandardProps | InputOverrideProps

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>
