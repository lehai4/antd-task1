export type PropsLogin = {
  user: boolean;
  isFetching: boolean;
  error: boolean;
};
export type accountFormProps = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type dataAccount = {
  username: string;
  password: string;
};
export type dataFormInfor = {
  firstName: string;
  lastName: string;
  sex: string;
  nationality: string;
  phone: number;
  dob: Date;
  address: string;
  department: string;
  identify: number;
  nameBank: string;
  stk: string;
  bank: string;
};
export interface DataType {
  id: number;
  color: string;
  namDepartment: string;
  nameManagement: string;
  numberEmployee: number;
  image: any;
  email: string;
  phone: string;
  key: React.ReactNode;
}
export interface EmployeeType {
  id: number;
  active: boolean;
  image: string;
  nameEmployee: string;
  color: string;
  nameDepartment: string;
  phone: string;
  sex: string;
  email: string;
  bank: string;
  dateOfBirth: string;
  address: string;
  country: string;
  stk: string;
  key: React.ReactNode;
}
export interface ContractForEmployeeType {
  id: number;
  image: string;
  colorTypeDotContract: string;
  nameCreate: string;
  nameContract: string;
  status: boolean;
  typeSalary: string;
  dependentPerson: number;
  dayStart: Date;
  dayEnd: Date;
  salaryAgree: GLfloat;
  salaryTax: GLfloat;
  totalAllowance: GLfloat;
  note: string;
  createAt: Date;
  updatedAt: Date;
  key: React.ReactNode;
}
