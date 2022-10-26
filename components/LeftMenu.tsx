import Link from "next/link";

export default function LeftMenu({}) {
  return (
    <aside className="wrap__aside hidden-md">
      <div className="aside-block ">
        <div className="aside-title">Main menu</div>
        <ul className="aside-menu">
          <li className="aside-menu__item">
            <Link href="/" className="aside-menu__link">
              <svg className="icon icon-home">
                <use xlinkHref="/img/sprite.svg?v2#home"></use>
              </svg>
              <span className="aside-menu__text">Discover</span>
            </Link>
          </li>
          <li className="aside-menu__item">
            <Link href="/events" className="aside-menu__link">
              <svg className="icon icon-star">
                <use xlinkHref="/img/sprite.svg?v2#star"></use>
              </svg>
              <span className="aside-menu__text">Events</span>
            </Link>
          </li>
          <li className="aside-menu__item">
            <Link href="/talks" className="aside-menu__link">
              <svg className="h-6 w-6 icon icon-microphon">
                <use xlinkHref="/img/sprite.svg?v2#microphon"></use>
              </svg>
              <span className="aside-menu__text">Talks</span>

              {/*<span className="kbd">3</span>*/}
            </Link>
          </li>
          <li className="aside-menu__item">
            <Link href="/workshops" className="aside-menu__link">
              <svg className="h-6 w-6 icon icon-cart-bar">
                <use xlinkHref="/img/sprite.svg?v2#workshops"></use>
              </svg>
              <span className="aside-menu__text">Workshops</span>
              {/*<span className="kbd">7</span>*/}
            </Link>
          </li>
          <li className="aside-menu__item">
            <Link href="/people" className="aside-menu__link">
              <svg
                className="icon icon-people"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6621 11.9833C11.7593 11.7998 11.9162 11.6537 12.1076 11.568C12.2991 11.4822 12.5142 11.4618 12.7187 11.5101C12.9232 11.5585 13.1054 11.6728 13.2364 11.8347C13.3674 11.9966 13.4395 12.1968 13.4414 12.4037C13.4414 13.4796 12.0959 14.3638 11.0522 14.3638C10.0085 14.3638 8.66291 13.4796 8.66291 12.4037C8.67007 12.1895 8.7515 11.9842 8.89362 11.8217C9.03574 11.6593 9.23003 11.5494 9.44432 11.5104C9.6586 11.4715 9.87996 11.5056 10.0718 11.6074C10.2636 11.7091 10.4143 11.8722 10.4989 12.0698C10.7692 12.7932 11.4672 12.5831 11.6684 11.9833H11.6621ZM16.2268 14.2092C17.0379 14.4194 18.3143 13.9991 18.5092 13.1149C18.5479 12.9481 18.5262 12.7731 18.448 12.6203C18.3698 12.4675 18.2399 12.3463 18.0806 12.2775C17.9213 12.2087 17.7426 12.1966 17.5753 12.2434C17.4079 12.2901 17.2624 12.3926 17.1636 12.5335C17.0908 12.6556 16.9776 12.7496 16.843 12.7995C17.0567 12.1317 17.258 11.3525 17.4151 10.6847C17.6348 10.7994 17.879 10.8612 18.1276 10.8651C18.3763 10.8689 18.6223 10.8147 18.8455 10.7069C19.0687 10.599 19.2628 10.4407 19.4116 10.2448C19.5605 10.0489 19.6599 9.82101 19.7018 9.57993C19.7437 9.33885 19.7269 9.09145 19.6526 8.85802C19.5784 8.6246 19.4489 8.41175 19.2748 8.23711C19.1007 8.06248 18.8869 7.93111 18.6511 7.85352C18.4152 7.77593 18.164 7.75441 17.9181 7.79087C17.9747 7.29619 18.0251 6.78301 18.0628 6.28833C18.7607 6.55422 19.4649 6.78296 20.1628 7.01175C20.1628 9.28725 19.729 15.3222 16.5664 15.3037C16.2654 15.3033 15.9671 15.2488 15.6861 15.1429C15.881 14.809 16.0633 14.5246 16.2268 14.2092ZM5.74549 14.2092C4.9344 14.438 3.6769 13.9991 3.46312 13.1149C3.42443 12.9481 3.44608 12.7731 3.52429 12.6203C3.60251 12.4675 3.73242 12.3463 3.8917 12.2775C4.05099 12.2087 4.22969 12.1966 4.39704 12.2434C4.56439 12.2901 4.70993 12.3926 4.80866 12.5335C4.84619 12.6 4.89752 12.658 4.95925 12.7038C5.02097 12.7496 5.09178 12.7823 5.16709 12.7995C4.84503 11.913 4.59274 11.0033 4.41254 10.0787H3.09218C2.88957 10.0787 2.69527 9.99965 2.552 9.85876C2.40874 9.71786 2.32827 9.52677 2.32827 9.32752C2.32827 9.12826 2.40874 8.93717 2.552 8.79628C2.69527 8.65539 2.88957 8.57618 3.09218 8.57618H4.15473C4.02898 7.81561 3.95986 7.06126 3.88441 6.28214C3.19907 6.54803 2.52 6.77677 1.8158 7.00556C1.8158 9.28106 2.24962 15.316 5.41223 15.2975C5.70717 15.2985 5.99965 15.244 6.2737 15.1367C6.11022 14.8894 5.96556 14.6236 5.82723 14.3578C5.78951 14.3021 5.77064 14.2526 5.7392 14.197L5.74549 14.2092ZM14.0701 8.5638H12.2342C11.9841 8.5638 11.7442 8.46601 11.5673 8.29206C11.3905 8.11812 11.2911 7.88227 11.2911 7.63628C11.2911 7.39029 11.3905 7.15444 11.5673 6.9805C11.7442 6.80655 11.9841 6.70876 12.2342 6.70876H13.957C14.2072 6.69483 14.4527 6.77912 14.6396 6.94321C14.8265 7.1073 14.9394 7.33775 14.9536 7.58375C14.9677 7.82974 14.8819 8.07113 14.7151 8.25493C14.5482 8.43873 14.314 8.54986 14.0639 8.5638H14.0701ZM3.79008 4.36522C3.79008 3.83344 3.79008 3.32639 3.79008 2.81317C6.27598 2.11878 8.68388 1.17818 10.9767 0.00585938C13.276 1.17849 15.6902 2.11908 18.1822 2.81317C18.1822 3.32639 18.1822 3.83961 18.1822 4.34665C19.4397 4.85987 20.6972 5.28045 22.0113 5.68856V6.07804C22.0113 9.52222 21.3448 17.1279 16.5852 17.1279C15.867 17.138 15.1615 16.9424 14.5543 16.5651C13.6116 17.4884 12.3354 18.0067 11.005 18.0067C9.6746 18.0067 8.39837 17.4884 7.45568 16.5651C6.85037 16.9289 6.15305 17.1176 5.4437 17.1094C0.67777 17.1094 0.0175781 9.50365 0.0175781 6.05947V5.66999C1.27508 5.26188 2.58917 4.85987 3.79008 4.34665V4.36522ZM18.3142 9.31197C18.3142 9.27179 18.298 9.23335 18.2691 9.20494C18.2402 9.17653 18.201 9.16055 18.1602 9.16055C18.1193 9.16055 18.0802 9.17653 18.0513 9.20494C18.0224 9.23335 18.0061 9.27179 18.0061 9.31197C18.0061 9.35215 18.0224 9.39074 18.0513 9.41915C18.0802 9.44756 18.1193 9.46354 18.1602 9.46354C18.201 9.46354 18.2402 9.44756 18.2691 9.41915C18.298 9.39074 18.3142 9.35215 18.3142 9.31197ZM8.83897 5.6019C9.24188 5.60068 9.63614 5.71701 9.97183 5.93614C10.3075 6.15526 10.5696 6.4674 10.7249 6.83301C10.8803 7.19862 10.9219 7.60127 10.8445 7.99014C10.7671 8.379 10.5742 8.73654 10.2902 9.01759C10.0062 9.29864 9.64375 9.49056 9.24883 9.56906C8.8539 9.64756 8.44417 9.60921 8.07146 9.45871C7.69874 9.3082 7.37976 9.0523 7.15489 8.72352C6.93001 8.39474 6.80937 8.00776 6.80812 7.61152C6.80729 7.34843 6.85917 7.08771 6.96078 6.84433C7.06239 6.60095 7.21175 6.37969 7.40034 6.19308C7.58892 6.00646 7.81302 5.85822 8.05987 5.75679C8.30671 5.65536 8.57145 5.60272 8.83897 5.6019ZM8.56858 7.61152C8.56858 7.6845 8.59808 7.75451 8.65055 7.80611C8.70302 7.85772 8.77421 7.88673 8.84842 7.88673C8.92262 7.88673 8.99373 7.85772 9.0462 7.80611C9.09868 7.75451 9.12818 7.6845 9.12818 7.61152C9.12818 7.53855 9.09868 7.46853 9.0462 7.41693C8.99373 7.36533 8.92262 7.33632 8.84842 7.33632C8.77421 7.33632 8.70302 7.36533 8.65055 7.41693C8.59808 7.46853 8.56858 7.53855 8.56858 7.61152ZM6.08504 4.45187C6.08504 7.54359 6.64465 15.7119 10.9767 15.7119C15.3088 15.7119 15.8684 7.55596 15.8684 4.45187C14.1845 3.95855 12.5477 3.32124 10.9767 2.54732C9.40578 3.32124 7.76896 3.95855 6.08504 4.45187Z"
                  fill="#B0B0B0"
                />
              </svg>
              <span className="aside-menu__text">People</span>
            </Link>
          </li>
          <li className="aside-menu__item">
            <Link href="/articles" className="aside-menu__link">
              <svg className="h-6 w-6 icon">
                <use xlinkHref="/img/sprite.svg?v2#document-text"></use>
              </svg>
              <span className="aside-menu__text">Articles</span>

              {/*<span className="kbd">3</span>*/}
            </Link>
          </li>
          <li className="aside-menu__item">
            <Link href="/multipass" className="aside-menu__link">
              <svg className="icon icon-multipass">
                <use xlinkHref="/img/sprite.svg?v2#multipass"></use>
              </svg>
              <span className="aside-menu__text">Multipass</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}