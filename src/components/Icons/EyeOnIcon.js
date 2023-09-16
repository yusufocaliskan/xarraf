import {Svg, Path} from 'react-native-svg';
const EyeOnIcon = ({color = '#fff', width = 23, height = 24}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11.5 1V3.1M20.95 4.15L19.375 5.725M2.04997 4.15L3.62497 5.725M11.5 22C15.2844 22 18.6541 19.5372 20.8211 17.4628C22.393 15.9581 22.393 13.3419 20.8211 11.8372C18.6541 9.76279 15.2844 7.3 11.5 7.3C7.71559 7.3 4.34594 9.76279 2.17895 11.8372C0.607017 13.3419 0.607018 15.9581 2.17895 17.4628C4.34595 19.5372 7.71559 22 11.5 22ZM14.65 14.65C14.65 16.3897 13.2397 17.8 11.5 17.8C9.76027 17.8 8.34997 16.3897 8.34997 14.65C8.34997 12.9103 9.76027 11.5 11.5 11.5C13.2397 11.5 14.65 12.9103 14.65 14.65Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};
export default EyeOnIcon;
