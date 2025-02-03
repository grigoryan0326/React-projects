export default function getIcon(name, className = "") {
  switch (name) {
    case "arrow-left":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_21_5803)'>
            <path
              d='M11.5313 5.53125H1.60412L3.24859 3.89475C3.43208 3.71212 3.43278 3.41533 3.25016 3.23184C3.06753 3.04833 2.77072 3.04765 2.58723 3.23025L0.137915 5.66775C0.137751 5.66789 0.137634 5.66805 0.137493 5.66819C-0.0455302 5.85082 -0.0461161 6.14857 0.137446 6.3318C0.13761 6.33194 0.137728 6.33211 0.137868 6.33225L2.58718 8.76975C2.77065 8.95233 3.06746 8.95169 3.25011 8.76815C3.43274 8.58466 3.43203 8.28787 3.24854 8.10525L1.60412 6.46875H11.5313C11.7901 6.46875 12 6.25889 12 6C12 5.74111 11.7901 5.53125 11.5313 5.53125Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_21_5803'>
              <rect
                width='12'
                height='12'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case "star":
      return (
        <svg
          className={className}
          width='12'
          height='13'
          viewBox='0 0 12 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_21_8643)'>
            <path
              d='M2.68585 11.9999C2.55438 11.9999 2.42382 11.9588 2.3124 11.8783C2.10485 11.7279 2.00789 11.4693 2.06438 11.2198L2.83637 7.81919L0.218262 5.52317C0.0258136 5.35517 -0.0477051 5.08911 0.0313069 4.84566C0.110319 4.60267 0.32529 4.43064 0.579813 4.40711L4.04389 4.09262L5.41346 0.887553C5.51445 0.652073 5.74444 0.5 5.99997 0.5C6.2555 0.5 6.48548 0.652073 6.58647 0.887003L7.95604 4.09262L11.4196 4.40711C11.6746 4.43009 11.8896 4.60267 11.9686 4.84566C12.0476 5.08865 11.9746 5.35517 11.7821 5.52317L9.16402 7.81873L9.93601 11.2193C9.99259 11.4693 9.89554 11.7279 9.68808 11.8778C9.48107 12.0278 9.20504 12.0393 8.98704 11.9083L5.99997 10.1233L3.01289 11.9093C2.9119 11.9693 2.79938 11.9999 2.68585 11.9999ZM5.99997 9.35429C6.11349 9.35429 6.22592 9.38478 6.327 9.44475L9.14607 11.1308L8.41748 7.92118C8.36547 7.69275 8.44302 7.45425 8.61954 7.2997L11.0916 5.13168L7.821 4.83468C7.58552 4.81316 7.383 4.66512 7.29098 4.44813L5.99997 1.42352L4.70739 4.44859C4.61639 4.66411 4.41387 4.81215 4.17894 4.83367L0.907855 5.13067L3.37984 7.2987C3.55691 7.4537 3.63437 7.69174 3.5819 7.92072L2.85386 11.1303L5.67293 9.44475C5.77392 9.38478 5.88644 9.35429 5.99997 9.35429ZM4.01743 4.1546C4.01743 4.1546 4.01743 4.15515 4.01688 4.15561L4.01743 4.1546ZM7.98149 4.15314L7.98204 4.15415C7.98204 4.1536 7.98204 4.1536 7.98149 4.15314Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_21_8643'>
              <rect
                width='12'
                height='12'
                fill='white'
                transform='translate(0 0.5)'
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case "user":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_21_8647)'>
            <path
              d='M9.0604 3.67304C9.0604 2.01291 7.68981 0.666504 5.99986 0.666504C4.30991 0.666504 2.93932 2.01291 2.93932 3.67304C2.93932 5.33317 4.30991 6.67958 5.99986 6.67958C7.68981 6.67958 9.0604 5.33317 9.0604 3.67304ZM3.73773 3.67304C3.73773 2.44428 4.74903 1.45082 5.99986 1.45082C7.25069 1.45082 8.262 2.44428 8.262 3.67304C8.262 4.9018 7.25069 5.89526 5.99986 5.89526C4.74903 5.89526 3.73773 4.9018 3.73773 3.67304Z'
              fill='currentColor'
            />
            <path
              d='M0.87679 11.2809C0.943324 11.3201 1.00986 11.3332 1.07639 11.3332C1.20946 11.3332 1.35583 11.2678 1.42236 11.1371C2.35383 9.51618 4.11031 8.50964 5.99986 8.50964C7.88941 8.50964 9.64589 9.51618 10.5907 11.1371C10.6971 11.3201 10.9499 11.3855 11.1362 11.2809C11.3225 11.1763 11.3891 10.9279 11.2826 10.7449C10.2048 8.88873 8.18216 7.72533 5.99986 7.72533C3.81757 7.72533 1.79495 8.88873 0.71711 10.7449C0.610657 10.9279 0.67719 11.1763 0.87679 11.2809Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_21_8647'>
              <rect
                width='12'
                height='12'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case "time":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_21_8650)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.828815 5.0625C1.28631 2.35612 3.63025 0.375 6.37506 0.375C9.48175 0.375 12.0001 2.89331 12.0001 6C12.0001 9.10669 9.48175 11.625 6.37506 11.625C4.62419 11.6537 2.96969 10.8247 1.94444 9.405C1.82425 9.23625 1.86381 9.00206 2.03256 8.88188C2.20131 8.76169 2.4355 8.80125 2.55569 8.97C3.44106 10.191 4.86719 10.9024 6.37506 10.875C8.76588 10.8754 10.8042 9.14175 11.1876 6.78187C11.6194 4.12425 9.81494 1.62 7.1575 1.18819C4.50006 0.756375 1.99563 2.5605 1.56381 5.21812L1.79631 4.98375C1.94275 4.83731 2.1805 4.83731 2.32694 4.98375C2.47338 5.13019 2.47338 5.36794 2.32694 5.51437L1.38944 6.45187C1.3195 6.52238 1.22444 6.56213 1.12506 6.5625H1.08756C0.976002 6.55069 0.875502 6.48938 0.813815 6.39563L0.0638148 5.27063C-0.0522477 5.09869 -0.00687274 4.86544 0.165065 4.74937C0.337002 4.63331 0.570252 4.67869 0.686315 4.85063L0.828815 5.0625ZM8.19569 8.17688L5.94569 6.48938C5.86469 6.42413 5.81256 6.312 5.81256 6.1875V2.8125C5.81256 2.60531 5.98037 2.4375 6.18756 2.4375C6.39475 2.4375 6.56256 2.60531 6.56256 2.8125V6L8.64569 7.57687C8.81144 7.70119 8.845 7.93612 8.72069 8.10187C8.59637 8.26762 8.36144 8.30119 8.19569 8.17688Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_21_8650'>
              <rect
                width='12'
                height='12'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case "arrow-down":
      return (
        <svg
          className={className}
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z'
            fill='currentColor'
          />
        </svg>
      )
      break
    case "cross":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_17188_1188)'>
            <path
              d='M6.99809 5.99999L11.793 1.20507C12.069 0.929082 12.069 0.482986 11.793 0.206994C11.517 -0.068998 11.0709 -0.068998 10.7949 0.206994L6.00001 5.00191L1.20507 0.206994C0.929082 -0.068998 0.482986 -0.068998 0.206994 0.206994C-0.068998 0.482986 -0.068998 0.929082 0.206994 1.20507L5.00191 5.99999L0.206994 10.7949C-0.068998 11.0709 -0.068998 11.517 0.206994 11.793C0.344638 11.9306 0.525336 11.9998 0.706034 11.9998C0.886732 11.9998 1.06743 11.9306 1.20507 11.793L5.99999 6.99807L10.7949 11.793C10.9325 11.9306 11.1132 11.9998 11.2939 11.9998C11.4746 11.9998 11.6553 11.9306 11.793 11.793C12.069 11.517 12.069 11.0709 11.793 10.7949L6.99809 5.99999Z'
              fill='#EA580C'
            />
          </g>
          <defs>
            <clipPath id='clip0_17188_1188'>
              <rect
                width='12'
                height='12'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      )
      break
    case "circle":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.00002 0C2.68629 0 0 2.68629 0 6.00002C0 9.31374 2.68629 12 6.00002 12C9.31374 12 12 9.31374 12 6.00002C12 2.68629 9.31371 0 6.00002 0ZM6.00002 10.5C3.51475 10.5 1.50001 8.48529 1.50001 6.00002C1.50001 3.51475 3.51475 1.50001 6.00002 1.50001C8.48529 1.50001 10.5 3.51475 10.5 6.00002C10.5 8.48529 8.48529 10.5 6.00002 10.5Z'
            fill='#0D9488'
          />
        </svg>
      )
      break
    case "triangle":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.100481 10.9219C0.166306 11.0359 0.260981 11.1305 0.374992 11.1964C0.489003 11.2622 0.618332 11.2969 0.749981 11.2969H11.25C11.3816 11.2969 11.511 11.2622 11.625 11.1964C11.739 11.1305 11.8337 11.0359 11.8995 10.9219C11.9653 10.8078 12 10.6785 12 10.5469C12 10.4152 11.9653 10.2859 11.8995 10.1719L6.64948 1.07858C6.58365 0.964575 6.48897 0.869905 6.37496 0.804085C6.26095 0.738265 6.13163 0.703613 5.99998 0.703613C5.86833 0.703613 5.73901 0.738265 5.625 0.804085C5.51099 0.869905 5.41631 0.964575 5.35048 1.07858L0.100481 10.1719C0.0346547 10.2859 0 10.4152 0 10.5469C0 10.6785 0.0346547 10.8078 0.100481 10.9219ZM5.99998 2.95358L9.95093 9.79686H2.04903L5.99998 2.95358Z'
            fill='#2563EB'
          />
        </svg>
      )
      break
    case "square":
      return (
        <svg
          className={className}
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12 0.6 11.4 0 10.6667 0Z'
            fill='#C026D3'
          />
        </svg>
      )
    default:
      break
  }
}
