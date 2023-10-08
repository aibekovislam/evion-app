import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { styles } from '../styles/AuthorizationStyles';

const LogoSVG = () => {
  return (
    <Svg style={styles.tinyLogo} width="197" height="141" viewBox="0 0 197 141" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M98.2306 1.87405L125.798 29.4545L98.2014 57.0372L70.6614 29.432L98.2328 1.8718L98.2306 1.87405ZM98.2238 0.00224706H98.2688L106.554 8.23998V3.70541H111.367V8.05573H115.254V3.70541H120.252L120.247 21.3876C120.243 21.9269 120.18 21.9044 120.452 22.201L125.643 27.376C126.148 27.8793 127.323 28.9377 127.656 29.4343C127.364 29.8702 121.879 35.2587 121.016 36.1216C120.378 36.7597 120.335 36.4901 120.344 37.672L120.348 56.9294C120.301 57.4619 120.36 57.1339 120.252 57.2417C119.548 56.8665 110.682 47.4625 109.96 47.1119L98.2081 58.8596L86.4942 47.0985C85.7908 47.4265 76.8767 56.862 76.1936 57.235L76.0948 56.8417C76.088 56.6777 76.0993 56.4485 76.1015 56.2755C76.1375 50.0489 76.0296 43.6717 76.106 37.4833C76.1127 36.926 76.1869 36.8833 75.9015 36.5755C74.8297 35.416 69.176 30.0073 68.7896 29.4343C69.0749 29.0096 74.1937 23.9852 75.0139 23.1627C76.1644 22.0122 76.2094 22.2909 76.1959 21.2909C76.1262 15.5722 76.1936 9.46688 76.1936 3.70316H81.099V8.05348H85.0785V3.70316H89.8917L89.9142 8.26021L98.2216 0L98.2238 0.00224706ZM76.1959 58.4731C76.0655 58.7135 76.1487 58.4529 76.1082 58.7787L76.1037 64.4818L120.254 64.5245C120.268 64.5042 120.279 64.4458 120.281 64.457L120.351 63.8706C120.348 62.7852 120.454 58.9472 120.252 58.4776L110.048 48.3051L98.1901 60.1202L86.3571 48.3276L76.1936 58.4709L76.1959 58.4731ZM94.8353 10.7387C94.9634 11.0713 95.0645 10.932 95.4914 10.9837C97.0509 11.1679 97.8036 12.2173 98.6081 12.9453C98.8598 13.1745 99.4395 13.6442 99.0777 14.1745C98.0014 15.7542 97.1205 14.134 96.6374 14.0868C96.0644 14.0307 95.5543 14.5902 95.997 15.089C96.406 15.5474 96.8531 15.325 97.2554 15.8306C97.2217 16.2283 97.0644 16.3407 96.743 16.4935C95.9273 16.5451 95.9453 15.7115 94.8937 15.8014C93.5387 15.916 92.7028 18.7473 95.2555 20.6528C99.1294 23.547 109.338 22.7268 110.369 31.3578C110.464 32.1532 110.509 32.9734 110.5 33.7891C110.491 34.5778 110.356 35.4385 110.374 36.1777C110.913 35.5036 112.479 32.1105 114.12 32.506C115.803 32.9128 113.947 37.2788 113.529 38.1664C112.567 40.2157 110.491 43.3886 108.864 44.7907L106.733 46.4558C107.812 46.0918 109.697 44.6986 110.589 43.9256C111.515 43.1234 111.962 42.6515 112.76 41.7415C113.767 40.5955 114.686 39.1843 115.369 37.7844C117.438 33.5554 117.899 28.1243 116.272 23.3245C113.679 15.671 106.599 10.6084 98.7856 10.3994C97.9834 10.3769 95.415 10.4129 94.8375 10.7365L94.8353 10.7387ZM88.6558 29.25C87.7952 29.7287 84.8224 29.9848 83.6943 29.9354C82.8157 29.8949 81.9798 29.7444 81.2023 29.5219C80.5687 29.3422 79.5373 28.7602 79.189 28.695C79.1171 31.8926 79.6384 34.461 80.7709 37.0788C81.4473 38.6428 83.018 41.1954 84.1977 42.3549C84.4606 42.6133 84.6269 42.7437 84.8606 42.9863C88.5188 46.7816 94.0398 48.7815 99.4395 48.4624C98.2576 48.1164 97.0554 48.3883 94.3993 47.3299C81.0653 42.0156 85.7459 29.5601 92.1748 31.4095C94.8285 32.1735 95.8757 35.1261 94.3072 37.2698C93.9634 37.7394 93.2623 38.3799 92.4714 38.6023C92.8848 37.8878 94.0218 36.4946 92.5275 35.2272C90.1771 33.2318 86.0425 38.0181 91.231 42.6336C92.6961 43.9368 95.224 45.2761 97.7385 45.7525C100.487 46.2738 103.772 45.0267 104.864 43.5032L96.3813 43.474C96.0307 41.0022 100.289 41.8314 101.738 41.7842C101.556 41.4875 101.291 41.3235 101.037 41.0673C100.743 40.7707 100.61 40.591 100.347 40.2764C99.8844 39.7258 99.4867 39.245 99.1137 38.5506C95.6375 32.0858 104.673 30.5219 104.594 38.2518C105.012 37.9686 105.37 37.2001 105.54 36.7485C106.32 34.6767 106.091 32.751 104.585 31.3196C102.655 29.4837 99.9361 29.3736 96.9183 30.259C95.5229 30.6679 94.2803 30.9848 92.9073 30.3174C91.9141 29.8343 90.9186 28.9197 90.8108 27.4973C90.6939 25.9738 91.5748 24.8615 93.0534 24.8413C93.8016 24.8323 94.4196 25.1761 94.6892 25.5738C95.1926 26.3109 94.869 26.976 94.7005 27.7243C96.1835 27.3715 97.0262 25.439 96.0397 23.9492C95.2577 22.7673 93.9657 21.8527 91.8961 22.1628C90.0625 22.4392 88.912 23.2189 88.2963 24.502C87.957 25.2121 87.8312 26.0997 87.9345 26.9603C88.0671 28.0456 88.4648 28.4928 88.6626 29.2523L88.6558 29.25ZM120.254 65.8278H76.1981C76.0363 66.0502 76.106 67.3917 76.106 67.7512C76.106 68.4613 76.106 69.1714 76.106 69.8792H118.405C120.908 69.8792 120.312 70.5286 120.351 66.5423C120.353 66.2704 120.382 66.0008 120.254 65.8255V65.8278ZM79.3665 27.0052C81.7731 27.176 83.8089 26.5895 84.8763 25.248C87.3705 22.1089 85.3392 19.6371 89.0558 14.8059C90.0221 13.5498 90.7883 13.0352 91.9141 12.1094C92.2714 11.8151 92.714 11.6196 92.8489 11.1926C89.6086 11.8465 85.9841 14.5947 83.9168 16.8867C81.7574 19.2821 79.517 23.6616 79.3665 27.0052ZM100.97 24.0593C98.6553 24.4795 99.8575 26.3266 102.015 25.9221C102.612 25.8098 103.612 25.2323 102.954 24.5222C102.527 24.0616 101.698 23.9267 100.97 24.0593ZM97.9609 25.5267C96.8015 26.0839 97.9182 27.14 99.0058 26.6996C100.111 26.2525 99.0822 24.9874 97.9609 25.5267ZM101.471 26.7266C100.509 27.2052 101.374 28.1602 102.347 27.8164C102.738 27.6793 102.943 27.2209 102.639 26.8794C102.392 26.603 101.828 26.5491 101.471 26.7266ZM90.822 80.5258H100.078V71.6409C100.078 71.2454 99.7226 71.3645 98.8733 71.3645C98.6598 71.3645 98.5969 71.4297 98.5969 71.6409V79.1371H96.0981V71.3623C95.1409 71.3623 94.7094 71.2274 94.7094 71.6387V79.1349H92.2107V71.36H90.822V80.5236V80.5258ZM83.1393 80.5258H84.6201C84.737 80.0247 85.1504 79.4742 85.3909 78.9843C85.674 78.4046 87.6874 74.6115 87.9503 74.4183V80.5258H89.339V71.3623C87.6087 71.3623 88.0469 71.0162 86.2852 74.4183L84.5257 77.5642V71.3623H83.1371V80.5258H83.1393ZM78.9732 79.1371H78.0475V76.3597C79.344 76.3597 80.3619 76.2923 80.3619 77.9327C80.3619 78.6001 79.6878 79.1371 78.9732 79.1371ZM76.6588 80.5258C78.3036 80.5258 80.0428 80.7932 81.0338 79.7191C82.8337 77.7664 81.2136 74.9733 79.3418 74.9733H78.0452V72.8453H81.099C81.4945 72.8453 81.3776 72.4903 81.3776 71.6409C81.3776 71.4274 81.3124 71.3645 81.099 71.3645H76.6565V80.528L76.6588 80.5258ZM114.421 80.5258H115.809V76.3597C116.135 76.5777 117.558 78.9394 117.901 79.4517C118.16 79.8382 118.378 80.1326 118.587 80.5258H120.252C120.002 80.0562 119.793 79.7461 119.513 79.3236C119.236 78.9079 119.009 78.5282 118.717 78.0832L117.106 75.6227L119.434 72.4881C119.665 72.1802 120.074 71.7398 120.16 71.3645H118.495L115.809 74.8812V71.3645H114.421V80.528V80.5258ZM101.556 80.5258H102.945V76.3597C103.28 76.5844 103.408 76.9552 103.648 77.3237L105.037 79.4517C105.295 79.8382 105.516 80.1326 105.722 80.5258H107.387C106.927 79.6539 106.351 78.9529 105.844 78.09L104.241 75.6205C104.464 75.2003 104.711 74.9598 104.983 74.6048C105.253 74.252 105.489 73.9284 105.776 73.5464C106.095 73.1195 107.203 71.7645 107.297 71.3645C105.199 71.3645 105.895 71.0162 103.846 73.7442C103.637 74.0206 103.158 74.7261 102.947 74.8812V71.3645H101.558V80.528L101.556 80.5258ZM108.221 71.6409V80.5258H112.663V79.1371H109.702V76.3597H112.201V74.9711H109.702V72.8431H112.663V71.3623H108.497C108.284 71.3623 108.219 71.4274 108.219 71.6387L108.221 71.6409Z" fill="#145BA6" stroke="white" stroke-width="0.6"/>
      <Path d='M0.10791 105.713V92.3049H2.13926L8.01982 102.093H6.92775L12.7117 92.3049H14.743L14.7812 105.713H12.4061L12.3859 96.0013H12.8847L7.98162 104.181H6.87157L1.88983 96.0013H2.46508V105.713H0.10791ZM18.7271 103.605C19.4304 103.848 20.0484 103.911 20.5854 103.796C21.1225 103.682 21.6011 103.291 22.0213 102.628L22.6729 101.612L22.9224 101.345L27.5963 92.3026H30.0478L24.2234 103.127C23.7515 104.035 23.1898 104.722 22.5381 105.196C21.8865 105.668 21.1876 105.933 20.4416 105.992C19.6956 106.05 18.9181 105.906 18.1136 105.56L18.7271 103.605ZM22.8639 103.491L16.8867 92.3049H19.5495L24.2234 101.576L22.8639 103.491ZM41.1955 92.3049H43.6852V105.713H41.1955V92.3049ZM34.261 105.713H31.7713V92.3049H34.261V105.713ZM41.3865 99.9674H34.0498V97.8417H41.3865V99.9674ZM47.4581 105.713V92.3049H49.9096V101.826L57.1114 92.3049H59.4304V105.713H56.9789V96.2125L49.777 105.713H47.4581ZM63.2032 105.713V92.3049H65.6548V103.608H72.4162V92.3049H74.888V105.713H63.2032ZM74.5824 108.664V105.1L75.1374 105.713H72.4162V103.605H76.8789V108.661H74.5801L74.5824 108.664ZM79.1799 105.713V92.3049H81.6314V101.826L88.8333 92.3049H91.15V105.713H88.6984V96.2125L81.4966 105.713H79.1799ZM94.925 105.713V92.3049H106.783V105.713H104.331V93.7992L104.907 94.4126H96.8036L97.3788 93.7992V105.713H94.9273H94.925ZM108.85 105.713L114.883 92.3049H117.335L123.389 105.713H120.784L115.594 93.6262H116.589L111.416 105.713H108.85ZM111.627 102.61L112.297 100.655H119.537L120.207 102.61H111.625H111.627ZM125.209 105.904C124.991 105.904 124.775 105.884 124.557 105.846C124.339 105.807 124.103 105.763 123.849 105.711L124.022 103.547C124.202 103.599 124.393 103.623 124.598 103.623C125.135 103.623 125.562 103.403 125.881 102.963C126.2 102.522 126.429 101.873 126.57 101.019C126.71 100.163 126.806 99.109 126.858 97.8574L127.049 92.3026H136.914V105.711H134.462V93.7969L135.037 94.4104H128.658L129.195 93.779L129.06 97.763C129.022 99.091 128.932 100.259 128.793 101.268C128.651 102.277 128.438 103.125 128.15 103.808C127.863 104.491 127.483 105.012 127.011 105.369C126.539 105.727 125.939 105.906 125.211 105.906L125.209 105.904ZM146.873 96.844C148.468 96.844 149.702 97.2012 150.569 97.9181C151.439 98.6326 151.872 99.7067 151.872 101.136C151.872 102.644 151.396 103.783 150.446 104.556C149.493 105.329 148.169 105.715 146.47 105.715H140.704V92.3071H143.156V96.8462H146.873V96.844ZM146.356 103.799C147.313 103.799 148.057 103.576 148.587 103.129C149.118 102.682 149.383 102.03 149.383 101.176C149.383 100.334 149.12 99.718 148.596 99.327C148.073 98.9382 147.327 98.7427 146.356 98.7427H143.156V103.799H146.356ZM163.845 92.3049H166.335V105.713H163.845V92.3049ZM156.91 105.713H154.421V92.3049H156.91V105.713ZM164.036 99.9674H156.699V97.8417H164.036V99.9674ZM176.314 105.906C175.267 105.906 174.303 105.733 173.422 105.39C172.541 105.043 171.775 104.563 171.123 103.942C170.471 103.322 169.968 102.596 169.611 101.758C169.253 100.922 169.074 100.006 169.074 99.0101C169.074 98.0147 169.253 97.0979 169.611 96.262C169.968 95.4261 170.471 94.698 171.123 94.0778C171.775 93.4576 172.541 92.9768 173.422 92.6307C174.303 92.2869 175.26 92.1139 176.296 92.1139C177.343 92.1139 178.305 92.2869 179.179 92.6307C180.053 92.9745 180.817 93.4576 181.469 94.0778C182.12 94.698 182.623 95.4238 182.981 96.262C183.338 97.0979 183.518 98.0147 183.518 99.0101C183.518 100.006 183.338 100.925 182.981 101.77C182.623 102.612 182.118 103.34 181.469 103.954C180.817 104.567 180.055 105.046 179.179 105.39C178.305 105.733 177.35 105.906 176.316 105.906H176.314ZM176.296 103.722C176.972 103.722 177.599 103.608 178.172 103.378C178.747 103.149 179.244 102.819 179.666 102.392C180.089 101.965 180.417 101.466 180.653 100.898C180.889 100.329 181.008 99.7 181.008 99.0101C181.008 98.3203 180.889 97.6911 180.653 97.1226C180.417 96.5541 180.089 96.0575 179.666 95.6283C179.244 95.2014 178.747 94.871 178.172 94.6418C177.597 94.4126 176.972 94.298 176.296 94.298C175.619 94.298 174.997 94.4126 174.428 94.6418C173.86 94.871 173.363 95.2014 172.934 95.6283C172.507 96.0552 172.175 96.5541 171.939 97.1226C171.703 97.6911 171.584 98.3203 171.584 99.0101C171.584 99.6865 171.701 100.313 171.939 100.886C172.175 101.462 172.505 101.963 172.925 102.39C173.348 102.817 173.844 103.147 174.419 103.376C174.995 103.605 175.619 103.72 176.296 103.72V103.722ZM188.574 97.8799H195.241V99.9292H188.574V97.8799ZM188.765 103.626H196.331V105.713H186.273V92.3049H196.061V94.3924H188.762V103.626H188.765Z' fill="#2B2A29" />
      <Path d='M7.46025 122.611H20.7786V128.676H7.46025V122.611ZM8.03326 133.923H23.0324V140.194H0V111.506H22.4999V117.778H8.03326V133.925V133.923ZM41.8426 140.767C39.5753 140.767 37.4788 140.406 35.5531 139.682C33.6273 138.958 31.96 137.927 30.5533 136.588C29.1467 135.249 28.0456 133.671 27.2546 131.853C26.4614 130.035 26.0659 128.035 26.0659 125.849C26.0659 123.663 26.4614 121.663 27.2546 119.845C28.0479 118.027 29.1467 116.45 30.5533 115.11C31.96 113.771 33.6273 112.74 35.5531 112.016C37.4788 111.293 39.5753 110.931 41.8426 110.931C44.4919 110.931 46.8625 111.396 48.9523 112.324C51.0421 113.252 52.7835 114.591 54.179 116.339L49.0152 121.011C48.0872 119.919 47.0693 119.085 45.9615 118.512C44.8559 117.939 43.6178 117.652 42.2516 117.652C41.0763 117.652 39.9977 117.843 39.0135 118.225C38.0293 118.607 37.1889 119.16 36.4923 119.885C35.7957 120.609 35.2497 121.476 34.852 122.487C34.4565 123.499 34.2587 124.618 34.2587 125.847C34.2587 127.076 34.4565 128.197 34.852 129.208C35.2475 130.22 35.7935 131.087 36.4923 131.811C37.1889 132.534 38.0293 133.089 39.0135 133.471C39.9977 133.853 41.0763 134.044 42.2516 134.044C43.6178 134.044 44.8537 133.756 45.9615 133.183C47.067 132.61 48.0849 131.777 49.0152 130.682L54.179 135.354C52.7858 137.075 51.0443 138.408 48.9523 139.349C46.8625 140.291 44.4919 140.763 41.8426 140.763V140.767ZM71.6364 140.767C69.3422 140.767 67.2232 140.399 65.284 139.662C63.3447 138.925 61.6572 137.88 60.2213 136.527C58.7877 135.174 57.6732 133.597 56.8822 131.793C56.089 129.99 55.6935 128.008 55.6935 125.849C55.6935 123.69 56.089 121.71 56.8822 119.906C57.6754 118.103 58.7877 116.524 60.2213 115.171C61.655 113.818 63.3425 112.773 65.284 112.036C67.2232 111.299 69.3422 110.931 71.6364 110.931C73.9599 110.931 76.0834 111.299 78.0091 112.036C79.9348 112.773 81.6089 113.818 83.029 115.171C84.4492 116.524 85.5637 118.101 86.3682 119.906C87.1749 121.708 87.5771 123.69 87.5771 125.849C87.5771 128.008 87.1749 129.995 86.3682 131.813C85.5615 133.631 84.4492 135.208 83.029 136.547C81.6089 137.887 79.9348 138.925 78.0091 139.662C76.0834 140.399 73.9599 140.767 71.6364 140.767ZM71.6364 134.046C72.7285 134.046 73.7464 133.855 74.6902 133.473C75.6339 133.091 76.4519 132.539 77.1485 131.813C77.8451 131.089 78.3911 130.222 78.7888 129.211C79.1843 128.199 79.382 127.08 79.382 125.849C79.382 124.593 79.1843 123.465 78.7888 122.467C78.3933 121.47 77.8473 120.609 77.1485 119.885C76.4519 119.162 75.6317 118.607 74.6902 118.225C73.7487 117.843 72.7307 117.652 71.6364 117.652C70.5443 117.652 69.5264 117.843 68.5827 118.225C67.6411 118.607 66.821 119.16 66.1244 119.885C65.4278 120.609 64.8817 121.47 64.4863 122.467C64.0908 123.465 63.8908 124.591 63.8908 125.849C63.8908 127.078 64.0885 128.199 64.4863 129.211C64.8817 130.222 65.4278 131.089 66.1244 131.813C66.821 132.536 67.6411 133.091 68.5827 133.473C69.5242 133.855 70.5421 134.046 71.6364 134.046ZM109.872 140.194V117.942H101.062V111.506H126.757V117.942H117.987V140.194H109.872ZM124.912 140.194L137.577 111.506H145.569L158.274 140.194H149.832L139.913 115.481H143.111L133.192 140.194H124.914H124.912ZM131.838 134.622L133.927 128.638H147.942L150.032 134.622H131.835H131.838ZM156.059 140.194L168.599 122.777L168.559 128.557L156.51 111.508H165.649L173.354 122.616L169.46 122.656L177.042 111.508H185.812L173.763 128.229V122.492L186.468 140.197H177.125L169.296 128.516H173.026L165.321 140.197H156.059V140.194ZM188.353 140.194V111.506H196.468V140.194H188.353Z' fill="#145BA6" />
    </Svg>
  );
};

export default LogoSVG;