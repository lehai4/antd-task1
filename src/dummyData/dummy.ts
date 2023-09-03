import iconOne from "../assets/icon/calender.png";
import iconTwo from "../assets/icon/calender1.png";
import iconThree from "../assets/icon/contact.png";
import iconDescrease from "../assets/icon/decrease.png";

import grantnumber from "../assets/icon/icon dasboard03.png";
import iconInscrease from "../assets/icon/increase.png";
import service from "../assets/icon/mess.png";
import monitorMinor from "../assets/icon/monitorMinor.png";
import iconFour from "../assets/icon/star.png";
import {
  ArrowUpOutlined,
  UsergroupAddOutlined,
  WindowsOutlined,
  MoneyCollectOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";

import { ContractType, ProjectType, TODO } from "../typeProps";
import { faker } from "@faker-js/faker";

export const item = [
  {
    name: "Số thứ tự đã cấp",
    icon: iconOne,
    total: 4.221,
    rate: "32,41%",
    iconRate: iconInscrease,
  },
  {
    name: "Số thứ tự đã sử dụng",
    icon: iconTwo,
    total: 3.721,
    rate: "32,41%",
    iconRate: iconDescrease,
  },
  {
    name: "Số thứ tự đang chờ",
    icon: iconThree,
    total: 468,
    rate: "56,41%",
    iconRate: iconInscrease,
  },
  {
    name: "Số thứ tự đã bỏ qua",
    icon: iconFour,
    total: 32,
    rate: "22,41%",
    iconRate: iconDescrease,
  },
];

export const items = [
  {
    total: 4.221,
    type: "Thiết bị",
    icon: monitorMinor,
    active: 3.799,
    noactive: 422,
    options: {
      colors: ["#FF7506", "#7E7D88"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
      labels: ["Thiết bị", "Dịch vụ"],
    },
    series: [90, 15],
  },
  {
    total: 276,
    type: "Dịch vụ",
    icon: service,
    active: 3.799,
    noactive: 422,
    options: {
      colors: ["#4277FF", "#7E7D88"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
            },
            total: {
              show: true,

              label: "Total",
            },
          },
        },
      },
      labels: ["Dịch vụ", ""],
    },
    series: [76, 25],
  },
  {
    total: 4.221,
    type: "Cấp số",
    icon: grantnumber,
    ussing: 3.721,
    waiting: 486,
    ignore: 32,
    options: {
      colors: ["#35C75A", "#7E7D88", "#F178B6"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "20%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "14px",
            },
            total: {
              show: true,
              label: "Total",
            },
          },
        },
      },
      labels: ["Cấp số", "", ""],
    },
    series: [86, 15, 10],
  },
];

export const boxContent = [
  {
    title: "Projects",
    iconMain: WindowsOutlined,
    total: 125,
    growthRate: {
      numberRate: 15.6,
      iconRate: ArrowUpOutlined,
    },
    progress: 15,
    color: "#75B6D1",
    bg: "linear-gradient(135deg,#8e4cf1 0,#c554bc 100%)",
  },
  {
    title: "New Employee",
    iconMain: UsergroupAddOutlined,
    total: 212,
    growthRate: {
      numberRate: 5.28,
      iconRate: ArrowUpOutlined,
    },
    progress: 15,
    color: "#6ECF76",
    bg: "linear-gradient(135deg,#289cf5,#4f8bb7)",
  },
  {
    title: "Running Tasks",
    iconMain: ScheduleOutlined,
    total: 10225,
    growthRate: {
      numberRate: 16,
      iconRate: ArrowUpOutlined,
    },
    progress: 15,
    color: "#BF8640",
    bg: "linear-gradient(135deg,#23bdb8 0,#65a986 100%)",
  },
  {
    title: "Earning",
    iconMain: MoneyCollectOutlined,
    total: 2658,
    growthRate: {
      numberRate: 5.07,
      iconRate: ArrowUpOutlined,
    },
    progress: 15,
    color: "#75B6D1",
    bg: "linear-gradient(135deg,#f48665 0,#d68e41 100%)",
  },
];

export const productDataChart = {
  options: {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: "Product Chart",
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  series: [
    {
      name: "Project 1",
      type: "column",
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: "Project 2",
      type: "line",
      data: [230, 420, 350, 27, 403, 202, 107, 301, 220, 202, 12, 160],
    },
  ],
};

export const profitDataChart = {
  options: {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Profit Chart",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: [
      {
        title: {
          text: "($ thousands)",
        },
      },
    ],
  },
  series: [
    {
      name: "Profit A",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "Profit B",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
};

export const incomeDataChart = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  },
  data: {
    labels: ["2001", "2002", "2003", "2004", "2005"],
    datasets: [
      {
        label: "Salse",
        data: ["2001", "2002", "2003", "2004", "2005"].map(() =>
          faker.datatype.number({ min: 0, max: 1000 })
        ),
        backgroundColor: "#333399",
      },
      {
        label: "Purchases",
        data: ["2001", "2002", "2003", "2004", "2005"].map(() =>
          faker.datatype.number({ min: 0, max: 1000 })
        ),
        backgroundColor: "#D9DEF2",
      },
    ],
  },
};
export const projectDeails: ProjectType[] = [
  {
    nameProject: "Project A",
    team: [
      {
        avatar:
          "https://yt3.ggpht.com/yti/AOXPAcUmomA4eWSIuNCBf0wZ-U3EgmFg91n9ASpunQ=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU",
      },
      { avatar: "" },
    ],
    priority: 1,
    status: true,
    amount: 150,
    key: 1,
  },
  {
    nameProject: "Project B",
    team: [
      {
        avatar:
          "https://yt3.ggpht.com/yti/AOXPAcUmomA4eWSIuNCBf0wZ-U3EgmFg91n9ASpunQ=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU",
      },
      { avatar: "" },
    ],
    priority: 0,
    status: false,
    amount: 85,
    key: 2,
  },
  {
    nameProject: "Project C",
    team: [
      {
        avatar:
          "https://yt3.ggpht.com/yti/AOXPAcUmomA4eWSIuNCBf0wZ-U3EgmFg91n9ASpunQ=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU",
      },
      { avatar: "" },
    ],
    priority: -1,
    status: false,
    amount: 450,
    key: 3,
  },
  {
    nameProject: "Project D",
    team: [
      {
        avatar:
          "https://yt3.ggpht.com/yti/AOXPAcUmomA4eWSIuNCBf0wZ-U3EgmFg91n9ASpunQ=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU",
      },
      { avatar: "" },
    ],
    priority: -1,
    status: false,
    amount: 640,
    key: 4,
  },
  {
    nameProject: "Project G",
    team: [
      {
        avatar:
          "https://yt3.ggpht.com/yti/AOXPAcUmomA4eWSIuNCBf0wZ-U3EgmFg91n9ASpunQ=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU",
      },
      { avatar: "" },
    ],
    priority: 1,
    status: true,
    amount: 1000,
    key: 5,
  },
];

export const todoData: TODO[] = [
  {
    value: "Add salary details in system",
    id: 0,
  },
  {
    value: "Announcement for holiday",
    id: 1,
  },
  {
    value: "Call bus driver",
    id: 2,
  },
  {
    value: "Office Picnic",
    id: 3,
  },
  {
    value: "Recharge My Mobile",
    id: 4,
  },
  {
    value: "Bank salary in month",
    id: 5,
  },
];
const contractArr: ContractType[] = [
  {
    id: 1,
    colorTypeDotContract: "#C8D071",
    employeeInfo: {
      id: 1,
      active: true,
      img: "https://lh3.googleusercontent.com/fife/AKsag4NMYNdKtJYCBE0kzE7ylQjPlnbUI_A7Id8drdCCgfLuJ2WyKeieBwH5mciiB7b3AjSczCjVIwO2jomEigHlPFASoBizVcAM18huPdIJgE4zYAozkGcIV3IKll6usg1N35YmYgs2jBKx_PexNoW7QD5UciS6CrH2pha5ade9C0dD9EJPN-dD3_C5aaHO61ZBa8vCqkX0w0EO0P11pyK-6GZn-2LamZ-xjBmP8CKkSnkPUkEEYKA5UcSxBFO003vW0XBEUw8ER5pVKNPodC4nXrlNEORS6tHPnsIT9Lu6K4uM_z6J7G1BT4ERERJRZHi9ZRk-MLx4Zhx9TpzUGKW58aORPNwkKbKbMDwkqd2levPKWRmlMd5gORJUYbQS5s6rirSZGZhWWh6XSqNYHZw2riFlVdgXxB6MiSSb1KktYRsvWj1qOg5O49Xl6wJSS2XDHJwnztytOpKpo1MSk6K3XtyDb2rhssgpCYmyLM4Yi7XLzRBDSPyTh1cDl31BcNatQKSst7uLPylC7-y-_ZzeLADxkwHHmQB8oZ5ah1Yw5iOVOsMqHR_n13igeW6JU5vLIz-9XYt8jdK0ygOuOeP1yqZXEhF3DS6cWKASP6B-18xBG5SvDYrwjvsWAQ3T3kw0EAFSg5i1qNdD9X49BHG1xim5BhUnQg0vcMVacZmpn6dhPAwxBDyeTWnr5O1B13Qdz2fnpgAH8AIKUjSJMiTVq0EkhYmVW7eqPrYf8v4qaDNMatsWCnxEEaNf5Cb5V3aarUkcNlfnxa7IgrLQm6ACztghSJce6fIdFhUIa47N4KRE1pVBjqGTRh7pabVDYsWWBVm2ktFl0nRPum7kbs3sjlHDf8dUeCWog_KkNuQJ8aNvLgUd5nMj1jmWIOKv_-9WQQLPp-EE5e1rTYZk5uj9Eeh41L6P1OXSjZMTNUxwQgctn3Dgft9W7Y8j4_xuZ5koj5mMPtLMTyqwxIDURkFzRxtxzq8m4Lt2ogTiajSvIs9KtGpRQZ3dop5zBvZHEerCgbDD4FCpE3yToWnN8R5k88DcJA1zPqsgnxHSnyurpbYUG-hlLesN6mVEgQOhuZjb3pBkDTM6ig2Q11zl1AFM9tnUQQJKJ4Nki2xOqEhHDi9pD66uDy_NZ_-5CXfRS20wvcEPOLJiLNy9J0wm712946JjNtJhohnbh8tlGTBsvwMKkVCZ7eWCuNidXMN_b3vdAsMAlY8iQgOOw6rmKieyssG0ACzO1MMxRnXFJE35cljYbJM2wHWhZ1NJ9-qMNEoIKSEtThSzOBNJoLegGXWX-u_noudag6ObYTrt7_Nqao_pwu0iBWLjPvU5X3ePtQm_ISgnoOjp8Ya6C_AwBO2KCJggj5PBYM3G7TuxAd8I8nnhlvNwezuq4xep1vHrRs2Rngkf6_cIREdGYSRydhMbGm8a=s32-c",
      nameEmployee: "Nguyen Van A",
      identify: 123456789,
      nameDepartment: "Salse",
      phone: "0123456789",
      sex: "Nam",
      email: "test111111111111111111111@gmail.com",
      bank: "Vietcombank",
      dateOfBirth: "01/01/2001",
      address: "70/15a",
      country: "VietNam",
      stk: "012345678",
    },
    image:
      "https://lh3.googleusercontent.com/fife/AKsag4NMYNdKtJYCBE0kzE7ylQjPlnbUI_A7Id8drdCCgfLuJ2WyKeieBwH5mciiB7b3AjSczCjVIwO2jomEigHlPFASoBizVcAM18huPdIJgE4zYAozkGcIV3IKll6usg1N35YmYgs2jBKx_PexNoW7QD5UciS6CrH2pha5ade9C0dD9EJPN-dD3_C5aaHO61ZBa8vCqkX0w0EO0P11pyK-6GZn-2LamZ-xjBmP8CKkSnkPUkEEYKA5UcSxBFO003vW0XBEUw8ER5pVKNPodC4nXrlNEORS6tHPnsIT9Lu6K4uM_z6J7G1BT4ERERJRZHi9ZRk-MLx4Zhx9TpzUGKW58aORPNwkKbKbMDwkqd2levPKWRmlMd5gORJUYbQS5s6rirSZGZhWWh6XSqNYHZw2riFlVdgXxB6MiSSb1KktYRsvWj1qOg5O49Xl6wJSS2XDHJwnztytOpKpo1MSk6K3XtyDb2rhssgpCYmyLM4Yi7XLzRBDSPyTh1cDl31BcNatQKSst7uLPylC7-y-_ZzeLADxkwHHmQB8oZ5ah1Yw5iOVOsMqHR_n13igeW6JU5vLIz-9XYt8jdK0ygOuOeP1yqZXEhF3DS6cWKASP6B-18xBG5SvDYrwjvsWAQ3T3kw0EAFSg5i1qNdD9X49BHG1xim5BhUnQg0vcMVacZmpn6dhPAwxBDyeTWnr5O1B13Qdz2fnpgAH8AIKUjSJMiTVq0EkhYmVW7eqPrYf8v4qaDNMatsWCnxEEaNf5Cb5V3aarUkcNlfnxa7IgrLQm6ACztghSJce6fIdFhUIa47N4KRE1pVBjqGTRh7pabVDYsWWBVm2ktFl0nRPum7kbs3sjlHDf8dUeCWog_KkNuQJ8aNvLgUd5nMj1jmWIOKv_-9WQQLPp-EE5e1rTYZk5uj9Eeh41L6P1OXSjZMTNUxwQgctn3Dgft9W7Y8j4_xuZ5koj5mMPtLMTyqwxIDURkFzRxtxzq8m4Lt2ogTiajSvIs9KtGpRQZ3dop5zBvZHEerCgbDD4FCpE3yToWnN8R5k88DcJA1zPqsgnxHSnyurpbYUG-hlLesN6mVEgQOhuZjb3pBkDTM6ig2Q11zl1AFM9tnUQQJKJ4Nki2xOqEhHDi9pD66uDy_NZ_-5CXfRS20wvcEPOLJiLNy9J0wm712946JjNtJhohnbh8tlGTBsvwMKkVCZ7eWCuNidXMN_b3vdAsMAlY8iQgOOw6rmKieyssG0ACzO1MMxRnXFJE35cljYbJM2wHWhZ1NJ9-qMNEoIKSEtThSzOBNJoLegGXWX-u_noudag6ObYTrt7_Nqao_pwu0iBWLjPvU5X3ePtQm_ISgnoOjp8Ya6C_AwBO2KCJggj5PBYM3G7TuxAd8I8nnhlvNwezuq4xep1vHrRs2Rngkf6_cIREdGYSRydhMbGm8a=s32-c",
    nameCreate: "Nguyen Van B",
    nameContract: "Hợp đồng xác định hạn",
    status: true,
    typeSalary: "gross to net",
    dependentPerson: 1,
    dayStart: new Date(),
    dayEnd: new Date(),
    salaryAgree: 80000000,
    salaryTax: 80000,
    totalAllowance: 0,
    note: "",
    createAt: new Date(),
    updatedAt: new Date(),
    key: "1",
  },
  {
    id: 2,
    colorTypeDotContract: "#C8D071",
    employeeInfo: {
      id: 2,
      active: true,
      img: "https://lh3.googleusercontent.com/fife/AKsag4NMYNdKtJYCBE0kzE7ylQjPlnbUI_A7Id8drdCCgfLuJ2WyKeieBwH5mciiB7b3AjSczCjVIwO2jomEigHlPFASoBizVcAM18huPdIJgE4zYAozkGcIV3IKll6usg1N35YmYgs2jBKx_PexNoW7QD5UciS6CrH2pha5ade9C0dD9EJPN-dD3_C5aaHO61ZBa8vCqkX0w0EO0P11pyK-6GZn-2LamZ-xjBmP8CKkSnkPUkEEYKA5UcSxBFO003vW0XBEUw8ER5pVKNPodC4nXrlNEORS6tHPnsIT9Lu6K4uM_z6J7G1BT4ERERJRZHi9ZRk-MLx4Zhx9TpzUGKW58aORPNwkKbKbMDwkqd2levPKWRmlMd5gORJUYbQS5s6rirSZGZhWWh6XSqNYHZw2riFlVdgXxB6MiSSb1KktYRsvWj1qOg5O49Xl6wJSS2XDHJwnztytOpKpo1MSk6K3XtyDb2rhssgpCYmyLM4Yi7XLzRBDSPyTh1cDl31BcNatQKSst7uLPylC7-y-_ZzeLADxkwHHmQB8oZ5ah1Yw5iOVOsMqHR_n13igeW6JU5vLIz-9XYt8jdK0ygOuOeP1yqZXEhF3DS6cWKASP6B-18xBG5SvDYrwjvsWAQ3T3kw0EAFSg5i1qNdD9X49BHG1xim5BhUnQg0vcMVacZmpn6dhPAwxBDyeTWnr5O1B13Qdz2fnpgAH8AIKUjSJMiTVq0EkhYmVW7eqPrYf8v4qaDNMatsWCnxEEaNf5Cb5V3aarUkcNlfnxa7IgrLQm6ACztghSJce6fIdFhUIa47N4KRE1pVBjqGTRh7pabVDYsWWBVm2ktFl0nRPum7kbs3sjlHDf8dUeCWog_KkNuQJ8aNvLgUd5nMj1jmWIOKv_-9WQQLPp-EE5e1rTYZk5uj9Eeh41L6P1OXSjZMTNUxwQgctn3Dgft9W7Y8j4_xuZ5koj5mMPtLMTyqwxIDURkFzRxtxzq8m4Lt2ogTiajSvIs9KtGpRQZ3dop5zBvZHEerCgbDD4FCpE3yToWnN8R5k88DcJA1zPqsgnxHSnyurpbYUG-hlLesN6mVEgQOhuZjb3pBkDTM6ig2Q11zl1AFM9tnUQQJKJ4Nki2xOqEhHDi9pD66uDy_NZ_-5CXfRS20wvcEPOLJiLNy9J0wm712946JjNtJhohnbh8tlGTBsvwMKkVCZ7eWCuNidXMN_b3vdAsMAlY8iQgOOw6rmKieyssG0ACzO1MMxRnXFJE35cljYbJM2wHWhZ1NJ9-qMNEoIKSEtThSzOBNJoLegGXWX-u_noudag6ObYTrt7_Nqao_pwu0iBWLjPvU5X3ePtQm_ISgnoOjp8Ya6C_AwBO2KCJggj5PBYM3G7TuxAd8I8nnhlvNwezuq4xep1vHrRs2Rngkf6_cIREdGYSRydhMbGm8a=s32-c",
      nameEmployee: "Nguyen Van A",
      identify: 123456789,
      nameDepartment: "Salse",
      phone: "0123456789",
      sex: "Nam",
      email: "test111111111111111111111@gmail.com",
      bank: "ACB",
      dateOfBirth: "01/01/2001",
      address: "70/15a",
      country: "VietNam",
      stk: "012345678",
    },
    image:
      "https://lh3.googleusercontent.com/fife/AKsag4NMYNdKtJYCBE0kzE7ylQjPlnbUI_A7Id8drdCCgfLuJ2WyKeieBwH5mciiB7b3AjSczCjVIwO2jomEigHlPFASoBizVcAM18huPdIJgE4zYAozkGcIV3IKll6usg1N35YmYgs2jBKx_PexNoW7QD5UciS6CrH2pha5ade9C0dD9EJPN-dD3_C5aaHO61ZBa8vCqkX0w0EO0P11pyK-6GZn-2LamZ-xjBmP8CKkSnkPUkEEYKA5UcSxBFO003vW0XBEUw8ER5pVKNPodC4nXrlNEORS6tHPnsIT9Lu6K4uM_z6J7G1BT4ERERJRZHi9ZRk-MLx4Zhx9TpzUGKW58aORPNwkKbKbMDwkqd2levPKWRmlMd5gORJUYbQS5s6rirSZGZhWWh6XSqNYHZw2riFlVdgXxB6MiSSb1KktYRsvWj1qOg5O49Xl6wJSS2XDHJwnztytOpKpo1MSk6K3XtyDb2rhssgpCYmyLM4Yi7XLzRBDSPyTh1cDl31BcNatQKSst7uLPylC7-y-_ZzeLADxkwHHmQB8oZ5ah1Yw5iOVOsMqHR_n13igeW6JU5vLIz-9XYt8jdK0ygOuOeP1yqZXEhF3DS6cWKASP6B-18xBG5SvDYrwjvsWAQ3T3kw0EAFSg5i1qNdD9X49BHG1xim5BhUnQg0vcMVacZmpn6dhPAwxBDyeTWnr5O1B13Qdz2fnpgAH8AIKUjSJMiTVq0EkhYmVW7eqPrYf8v4qaDNMatsWCnxEEaNf5Cb5V3aarUkcNlfnxa7IgrLQm6ACztghSJce6fIdFhUIa47N4KRE1pVBjqGTRh7pabVDYsWWBVm2ktFl0nRPum7kbs3sjlHDf8dUeCWog_KkNuQJ8aNvLgUd5nMj1jmWIOKv_-9WQQLPp-EE5e1rTYZk5uj9Eeh41L6P1OXSjZMTNUxwQgctn3Dgft9W7Y8j4_xuZ5koj5mMPtLMTyqwxIDURkFzRxtxzq8m4Lt2ogTiajSvIs9KtGpRQZ3dop5zBvZHEerCgbDD4FCpE3yToWnN8R5k88DcJA1zPqsgnxHSnyurpbYUG-hlLesN6mVEgQOhuZjb3pBkDTM6ig2Q11zl1AFM9tnUQQJKJ4Nki2xOqEhHDi9pD66uDy_NZ_-5CXfRS20wvcEPOLJiLNy9J0wm712946JjNtJhohnbh8tlGTBsvwMKkVCZ7eWCuNidXMN_b3vdAsMAlY8iQgOOw6rmKieyssG0ACzO1MMxRnXFJE35cljYbJM2wHWhZ1NJ9-qMNEoIKSEtThSzOBNJoLegGXWX-u_noudag6ObYTrt7_Nqao_pwu0iBWLjPvU5X3ePtQm_ISgnoOjp8Ya6C_AwBO2KCJggj5PBYM3G7TuxAd8I8nnhlvNwezuq4xep1vHrRs2Rngkf6_cIREdGYSRydhMbGm8a=s32-c",
    nameCreate: "Nguyen Van A",
    nameContract: "Hợp đồng xác định hạn",
    status: false,
    typeSalary: "gross to net",
    dependentPerson: 3,
    dayStart: new Date(),
    dayEnd: new Date(),
    salaryAgree: 8000000,
    salaryTax: 80,
    totalAllowance: 0,
    note: "",
    createAt: new Date(),
    updatedAt: new Date(),
    key: "2",
  },
];

export default contractArr;
