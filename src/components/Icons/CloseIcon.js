import {Svg, Path} from 'react-native-svg';
const CloseIcon = ({color = '#86888D', width = 24, height = 24}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10.6213 10.6213L6.37868 6.37868M6.37868 10.6213L10.6213 6.37868M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default CloseIcon;
