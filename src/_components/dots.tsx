export default function Dots() {
  return (
    <svg
      id="visual"
      viewBox="0 0 900 600"
      width="900"
      height="600"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      className="w-2/3 lg:w-11/12 h-full absolute -z-10"
    >
      <g fill="currentColor" className="text-rose-800/70">
        <circle r="78" cx="216" cy="124"></circle>
        <circle r="34" cx="102" cy="334"></circle>
        <circle r="69" cx="251" cy="445"></circle>
        <circle r="39" cx="410" cy="286"></circle>
        <circle r="62" cx="633" cy="269"></circle>
        <circle r="76" cx="753" cy="488"></circle>
      </g>
    </svg>
  );
}
