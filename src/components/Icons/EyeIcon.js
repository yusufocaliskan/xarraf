import {Svg, Path} from 'react-native-svg';
const EyeIcon = ({color = '#86888D', width = 24, height = 17}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M21.4967 6.19975C22.7392 7.50697 22.7392 9.49303 21.4967 10.8002C19.4013 13.005 15.8023 16 11.7143 16C7.62623 16 4.02731 13.005 1.93183 10.8003C0.689391 9.49303 0.689391 7.50697 1.93183 6.19975C4.02731 3.995 7.62623 1 11.7143 1C15.8023 1 19.4013 3.995 21.4967 6.19975Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <Path
        d="M14.9286 8.5C14.9286 10.2752 13.4895 11.7143 11.7143 11.7143C9.93908 11.7143 8.5 10.2752 8.5 8.5C8.5 6.7248 9.93908 5.28571 11.7143 5.28571C13.4895 5.28571 14.9286 6.7248 14.9286 8.5Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </Svg>
  );
};
export default EyeIcon;
