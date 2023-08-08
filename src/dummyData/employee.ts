import { EmployeeType } from "../typeProps";

const department: EmployeeType[] = [
  {
    id: 1,
    key: "1",
    active: true,
    image:
      "https://lh3.googleusercontent.com/fife/AKsag4NMYNdKtJYCBE0kzE7ylQjPlnbUI_A7Id8drdCCgfLuJ2WyKeieBwH5mciiB7b3AjSczCjVIwO2jomEigHlPFASoBizVcAM18huPdIJgE4zYAozkGcIV3IKll6usg1N35YmYgs2jBKx_PexNoW7QD5UciS6CrH2pha5ade9C0dD9EJPN-dD3_C5aaHO61ZBa8vCqkX0w0EO0P11pyK-6GZn-2LamZ-xjBmP8CKkSnkPUkEEYKA5UcSxBFO003vW0XBEUw8ER5pVKNPodC4nXrlNEORS6tHPnsIT9Lu6K4uM_z6J7G1BT4ERERJRZHi9ZRk-MLx4Zhx9TpzUGKW58aORPNwkKbKbMDwkqd2levPKWRmlMd5gORJUYbQS5s6rirSZGZhWWh6XSqNYHZw2riFlVdgXxB6MiSSb1KktYRsvWj1qOg5O49Xl6wJSS2XDHJwnztytOpKpo1MSk6K3XtyDb2rhssgpCYmyLM4Yi7XLzRBDSPyTh1cDl31BcNatQKSst7uLPylC7-y-_ZzeLADxkwHHmQB8oZ5ah1Yw5iOVOsMqHR_n13igeW6JU5vLIz-9XYt8jdK0ygOuOeP1yqZXEhF3DS6cWKASP6B-18xBG5SvDYrwjvsWAQ3T3kw0EAFSg5i1qNdD9X49BHG1xim5BhUnQg0vcMVacZmpn6dhPAwxBDyeTWnr5O1B13Qdz2fnpgAH8AIKUjSJMiTVq0EkhYmVW7eqPrYf8v4qaDNMatsWCnxEEaNf5Cb5V3aarUkcNlfnxa7IgrLQm6ACztghSJce6fIdFhUIa47N4KRE1pVBjqGTRh7pabVDYsWWBVm2ktFl0nRPum7kbs3sjlHDf8dUeCWog_KkNuQJ8aNvLgUd5nMj1jmWIOKv_-9WQQLPp-EE5e1rTYZk5uj9Eeh41L6P1OXSjZMTNUxwQgctn3Dgft9W7Y8j4_xuZ5koj5mMPtLMTyqwxIDURkFzRxtxzq8m4Lt2ogTiajSvIs9KtGpRQZ3dop5zBvZHEerCgbDD4FCpE3yToWnN8R5k88DcJA1zPqsgnxHSnyurpbYUG-hlLesN6mVEgQOhuZjb3pBkDTM6ig2Q11zl1AFM9tnUQQJKJ4Nki2xOqEhHDi9pD66uDy_NZ_-5CXfRS20wvcEPOLJiLNy9J0wm712946JjNtJhohnbh8tlGTBsvwMKkVCZ7eWCuNidXMN_b3vdAsMAlY8iQgOOw6rmKieyssG0ACzO1MMxRnXFJE35cljYbJM2wHWhZ1NJ9-qMNEoIKSEtThSzOBNJoLegGXWX-u_noudag6ObYTrt7_Nqao_pwu0iBWLjPvU5X3ePtQm_ISgnoOjp8Ya6C_AwBO2KCJggj5PBYM3G7TuxAd8I8nnhlvNwezuq4xep1vHrRs2Rngkf6_cIREdGYSRydhMbGm8a=s32-c",
    nameEmployee: "Nguyen Huu Hoang Nam",
    color: "#C2BA47",
    nameDepartment: "Salse",
    phone: "0123456789",
    sex: "Nam",
    email: "tes1111111111111111111111t@gmail.com",
    bank: "ACB",
    dateOfBirth: "01/01/2001",
    address: "70/15a Nguyen Sy Sach, P15 Tan Binh Tp.HCM",
    country: "VietNam",
    stk: "012345678",
  },
  {
    id: 2,
    key: "2",
    active: false,
    image:
      "https://lh3.googleusercontent.com/fife/AKsag4NMYNdKtJYCBE0kzE7ylQjPlnbUI_A7Id8drdCCgfLuJ2WyKeieBwH5mciiB7b3AjSczCjVIwO2jomEigHlPFASoBizVcAM18huPdIJgE4zYAozkGcIV3IKll6usg1N35YmYgs2jBKx_PexNoW7QD5UciS6CrH2pha5ade9C0dD9EJPN-dD3_C5aaHO61ZBa8vCqkX0w0EO0P11pyK-6GZn-2LamZ-xjBmP8CKkSnkPUkEEYKA5UcSxBFO003vW0XBEUw8ER5pVKNPodC4nXrlNEORS6tHPnsIT9Lu6K4uM_z6J7G1BT4ERERJRZHi9ZRk-MLx4Zhx9TpzUGKW58aORPNwkKbKbMDwkqd2levPKWRmlMd5gORJUYbQS5s6rirSZGZhWWh6XSqNYHZw2riFlVdgXxB6MiSSb1KktYRsvWj1qOg5O49Xl6wJSS2XDHJwnztytOpKpo1MSk6K3XtyDb2rhssgpCYmyLM4Yi7XLzRBDSPyTh1cDl31BcNatQKSst7uLPylC7-y-_ZzeLADxkwHHmQB8oZ5ah1Yw5iOVOsMqHR_n13igeW6JU5vLIz-9XYt8jdK0ygOuOeP1yqZXEhF3DS6cWKASP6B-18xBG5SvDYrwjvsWAQ3T3kw0EAFSg5i1qNdD9X49BHG1xim5BhUnQg0vcMVacZmpn6dhPAwxBDyeTWnr5O1B13Qdz2fnpgAH8AIKUjSJMiTVq0EkhYmVW7eqPrYf8v4qaDNMatsWCnxEEaNf5Cb5V3aarUkcNlfnxa7IgrLQm6ACztghSJce6fIdFhUIa47N4KRE1pVBjqGTRh7pabVDYsWWBVm2ktFl0nRPum7kbs3sjlHDf8dUeCWog_KkNuQJ8aNvLgUd5nMj1jmWIOKv_-9WQQLPp-EE5e1rTYZk5uj9Eeh41L6P1OXSjZMTNUxwQgctn3Dgft9W7Y8j4_xuZ5koj5mMPtLMTyqwxIDURkFzRxtxzq8m4Lt2ogTiajSvIs9KtGpRQZ3dop5zBvZHEerCgbDD4FCpE3yToWnN8R5k88DcJA1zPqsgnxHSnyurpbYUG-hlLesN6mVEgQOhuZjb3pBkDTM6ig2Q11zl1AFM9tnUQQJKJ4Nki2xOqEhHDi9pD66uDy_NZ_-5CXfRS20wvcEPOLJiLNy9J0wm712946JjNtJhohnbh8tlGTBsvwMKkVCZ7eWCuNidXMN_b3vdAsMAlY8iQgOOw6rmKieyssG0ACzO1MMxRnXFJE35cljYbJM2wHWhZ1NJ9-qMNEoIKSEtThSzOBNJoLegGXWX-u_noudag6ObYTrt7_Nqao_pwu0iBWLjPvU5X3ePtQm_ISgnoOjp8Ya6C_AwBO2KCJggj5PBYM3G7TuxAd8I8nnhlvNwezuq4xep1vHrRs2Rngkf6_cIREdGYSRydhMbGm8a=s32-c",
    nameEmployee: "Nguyen Van A",
    color: "blue",
    nameDepartment: "Chăm sóc khách hàng",
    phone: "0123456789",
    sex: "Nữ",
    email: "test@gmail.com",
    bank: "ACB",
    dateOfBirth: "01/01/2001",
    address: "12/21 ABC",
    country: "VietNam",
    stk: "012345678",
  },
];
export default department;
