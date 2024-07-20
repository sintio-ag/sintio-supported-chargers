type SintioLogoProps = {
  height?: string;
};

export function SintioLogoYellowWhite(props: SintioLogoProps) {
  const defaultHeight = "40px";
  const { height = defaultHeight } = props;

  return (
    <svg
      version="1.1"
      id="baselayer"
      x="0px"
      y="0px"
      viewBox="0 0 247.40907 82.967001"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Sintio Logo</title>
      <g transform="translate(-174.71293,-379.5165)">
        <path
          id="logoSignAbove"
          fill="#DEF34F"
          d="m 175.28,406.669 10.375,21.992 c 1.058,2.244 4.143,2.513 5.574,0.487 l 31.686,-44.837 c 1.79,-2.533 -0.93,-5.8 -3.745,-4.499 l -41.022,18.963 c -2.982,1.378 -4.27,4.923 -2.868,7.894"
        />
        <path
          id="logoSignBelow"
          fill="#DEF34F"
          d="M 226.415,435.331 216.04,413.339 c -1.058,-2.244 -4.143,-2.513 -5.574,-0.487 l -31.686,44.837 c -1.79,2.533 0.93,5.8 3.745,4.499 l 41.022,-18.963 c 2.982,-1.378 4.27,-4.923 2.868,-7.894"
        />
        <path
          id="logoText"
          fill="#FFFFFF"
          d="m 406.884,426.703 c -4.865,0 -8.24,-4.02 -8.24,-11.069 0,-7.048 3.226,-10.97 8.091,-10.97 4.864,0 8.239,4.021 8.239,11.069 0,7.049 -3.226,10.97 -8.09,10.97 m 0,-28.938 c -9.084,0 -15.388,6.75 -15.388,17.968 0,11.218 6.205,17.87 15.288,17.87 9.034,0 15.338,-6.751 15.338,-17.969 0,-11.218 -6.204,-17.869 -15.238,-17.869 m -24.868,0.546 h -6.949 v 34.746 h 6.949 z m -16.132,0 h -26.903 v 6.85 h 9.977 v 27.896 h 6.949 v -27.896 h 9.977 z m -35.589,0 h -6.85 v 14.692 c 0,1.936 0.099,6.304 0.099,7.595 -0.447,-0.894 -1.588,-2.631 -2.432,-3.922 l -12.31,-18.365 h -6.651 v 34.746 H 309 v -15.289 c 0,-1.935 -0.099,-6.303 -0.099,-7.594 0.447,0.893 1.589,2.631 2.432,3.921 l 12.757,18.962 h 6.205 z m -39.561,0 h -6.949 v 34.746 h 6.949 z m -28.392,13.501 c -5.51,-1.291 -6.999,-1.985 -6.999,-4.17 0,-1.538 1.241,-3.127 4.964,-3.127 3.177,0 5.659,1.291 7.892,3.574 l 5.014,-4.864 c -3.277,-3.425 -7.247,-5.46 -12.658,-5.46 -6.85,0 -12.409,3.871 -12.409,10.175 0,6.85 4.467,8.885 10.87,10.374 6.552,1.49 7.744,2.482 7.744,4.716 0,2.631 -1.936,3.772 -6.056,3.772 -3.326,0 -6.453,-1.141 -8.885,-3.971 l -5.013,4.468 c 2.63,3.871 7.693,6.304 13.501,6.304 9.481,0 13.65,-4.468 13.65,-11.069 0,-7.545 -6.105,-9.431 -11.615,-10.722"
        />
      </g>
    </svg>
  );
}