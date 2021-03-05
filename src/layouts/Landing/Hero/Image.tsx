import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  hero: {
    animation: '$fadeIn 2s',
  },
}));

const Image: React.FC = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 566 485.3"
      className={classes.hero}
    >
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation={20} />
        <feOffset dx={0} dy={10} result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope={0.15} />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <circle id="hi-bg" cx={284} cy={242.7} r={242.7} fill="#161F2D" />
      <g id="hi-1" className="animated-slide">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M212 195.3c0 1.1-.9 2-2 2H36c-1.1 0-2-.9-2-2v-69c0-1.1.9-2 2-2h174c1.1 0 2 .9 2 2v69z"
        />
        <circle cx={58.1} cy={171} r={9.1} fill="#36D56C" />
        <path
          fill="#738199"
          d="M137.9 146.5c0 1-.8 1.8-1.8 1.8H51.3c-1 0-1.8-.8-1.8-1.8v-5.1c0-1 .8-1.8 1.8-1.8H136c1 0 1.8.8 1.8 1.8v5.1z"
        />
        <g fill="#36D56C">
          <path d="M84.4 166.6v8.7c0 1-.2 1.8-.6 2.6-.4.7-1 1.3-1.8 1.6-.8.4-1.7.6-2.8.6-1.6 0-2.9-.4-3.8-1.3-.9-.8-1.4-2-1.4-3.4v-8.7h3.2v8.8c0 1.5.7 2.2 2 2.2.7 0 1.2-.2 1.5-.5.3-.4.5-1 .5-1.8v-8.7h3.2z" />
          <path d="M95.4 175c0 1.5-.3 2.8-1 3.7-.7.9-1.6 1.4-2.8 1.4-.9 0-1.6-.3-2.2-1v4.6h-3.1V170h2.9l.1.9c.6-.7 1.4-1.1 2.3-1.1 1.2 0 2.2.4 2.8 1.3s1 2.1 1 3.7v.2zm-3.1-.2c0-1.7-.5-2.6-1.5-2.6-.7 0-1.2.3-1.5.8v3.9c.3.5.8.8 1.5.8 1 0 1.5-.8 1.5-2.5v-.4z" />
        </g>
        <g fill="#738199">
          <path d="M150.1 175.6l.5-4.4h5v1.5h-3.4l-.2 1.7c.1-.1.3-.2.6-.2s.5-.1.7-.1c.8 0 1.5.3 2 .8s.7 1.2.7 2.1c0 .5-.1 1-.4 1.5s-.6.8-1 1-1 .4-1.6.4c-.5 0-1-.1-1.5-.3-.5-.2-.8-.5-1.1-.9-.3-.4-.4-.8-.4-1.3h2c0 .3.1.6.3.7s.4.3.7.3c.7 0 1-.5 1-1.5 0-.9-.4-1.4-1.2-1.4-.5 0-.8.1-1 .4l-1.7-.3z" />
          <path d="M162.9 179.8h-6v-1.3l2.7-2.9c.7-.8 1-1.4 1-1.8 0-.4-.1-.6-.2-.8s-.4-.3-.7-.3c-.3 0-.5.1-.7.4s-.3.6-.3 1h-2c0-.5.1-1 .4-1.5s.6-.8 1.1-1 1-.4 1.6-.4c.9 0 1.6.2 2.1.6s.7 1 .7 1.8c0 .3-.1.7-.2 1s-.3.7-.6 1-.7.8-1.3 1.4l-1.1 1.3h3.4v1.5z" />
          <path d="M169.8 172.3l-3.2 7.5h-2.1l3.2-7h-4.1v-1.5h6.1v1z" />
          <path d="M175.8 174.1c.4-.5 1-.8 1.6-.8.7 0 1.2.2 1.6.6s.5 1 .5 1.8v4h-2v-4c0-.3-.1-.6-.2-.7s-.4-.2-.7-.2c-.4 0-.7.1-.9.4v4.5h-2v-9h2v3.4z" />
          <path d="M184.4 175.2h-.7c-.6 0-1 .2-1.2.6v4h-2v-6.3h1.9l.1.8c.3-.6.8-.9 1.4-.9.2 0 .4 0 .6.1l-.1 1.7z" />
          <path d="M188.5 178c0-.2-.1-.3-.3-.4s-.5-.2-1-.3-.9-.3-1.2-.4-.6-.4-.7-.6-.3-.5-.3-.9c0-.6.2-1.1.7-1.4s1.1-.6 1.9-.6c.8 0 1.5.2 2 .6s.8.9.8 1.5h-2c0-.5-.3-.8-.8-.8-.2 0-.4.1-.5.2s-.2.3-.2.4c0 .2.1.3.3.4s.4.2.8.3.7.2 1 .3c1 .3 1.4.9 1.4 1.8 0 .6-.3 1-.8 1.4s-1.2.5-2 .5c-.5 0-1-.1-1.5-.3s-.8-.5-1-.8-.4-.7-.4-1.1h1.8c0 .3.1.5.3.6s.4.2.7.2c.3 0 .5-.1.6-.2s.4-.2.4-.4z" />
        </g>
      </g>
      <g id="hi-2" className="animated-slide">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M550 283.7c0 1.1-.9 2-2 2H21c-1.1 0-2-.9-2-2v-64c0-1.1.9-2 2-2h527c1.1 0 2 .9 2 2v64z"
        />
        <g id="hi-bars">
          <path
            fill="#36D56C"
            d="M43.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M51.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M59.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M67.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M76.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M84.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M92.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M100.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M108.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M116.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M124.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M132.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M141.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M149.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M157.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M165.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M173.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M181.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M189.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M198.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M206.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M214.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M222.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M230.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M238.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M246.2 266.4c0 1.2-1 2.3-2.2 2.3h-.5c-1.2 0-2.2-1-2.2-2.3v-13.5c0-1.2 1-2.3 2.2-2.3h.5c1.2 0 2.2 1 2.2 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M254.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M263.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M271.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M279.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M287.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M295.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M303.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M311.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M320.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M328.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M336.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M344.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M352.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M360.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M368.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M376.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M385.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M393.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M401.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M409.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M417.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#DF484A"
            d="M425.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M433.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M442.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M450.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M458.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M466.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M474.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M482.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M490.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M498.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M507.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M515.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M523.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
          <path
            fill="#36D56C"
            d="M531.2 266.4c0 1.2-1 2.3-2.3 2.3h-.5c-1.2 0-2.3-1-2.3-2.3v-13.5c0-1.2 1-2.3 2.3-2.3h.5c1.2 0 2.3 1 2.3 2.3v13.5z"
          />
        </g>
        <path
          fill="#738199"
          d="M138.9 239.8c0 1.2-.9 2.1-2.1 2.1H39.6c-1.2 0-2.1-.9-2.1-2.1V234c0-1.2.9-2.1 2.1-2.1h97.2c1.2 0 2.1.9 2.1 2.1v5.8z"
        />
        <g fill="#36D56C">
          <path d="M476.9 236.5c0 .8-.1 1.6-.4 2.2-.3.6-.7 1.1-1.3 1.5-.6.4-1.2.5-1.9.5s-1.3-.2-1.9-.5-1-.8-1.3-1.5c-.3-.7-.5-1.4-.5-2.2v-.4c0-.8.2-1.6.5-2.2.3-.6.7-1.1 1.3-1.5s1.2-.5 1.9-.5 1.3.2 1.9.5c.6.3 1 .8 1.3 1.5s.5 1.4.5 2.2l-.1.4zm-1.8-.4c0-.9-.2-1.6-.5-2-.3-.4-.8-.7-1.4-.7-.6 0-1 .2-1.4.7-.4.5-.5 1.1-.5 2v.4c0 .9.2 1.5.5 2s.8.7 1.4.7c.6 0 1-.2 1.4-.7s.5-1.1.5-2v-.4z" />
          <path d="M483.7 237.4c0 1-.2 1.8-.7 2.3s-1 .9-1.8.9c-.6 0-1.2-.2-1.6-.7v3H478v-8.8h1.6l.1.6c.4-.5.9-.7 1.6-.7.8 0 1.4.3 1.8.9s.6 1.4.6 2.5zm-1.7-.1c0-.6-.1-1-.3-1.4-.2-.4-.5-.5-.9-.5-.5 0-.9.2-1.1.6v2.6c.2.4.6.6 1.1.6.8.1 1.2-.6 1.2-1.9z" />
          <path d="M487.7 240.6c-.9 0-1.7-.3-2.3-.9-.6-.6-.9-1.3-.9-2.3v-.2c0-.6.1-1.2.4-1.7.3-.5.6-.9 1-1.2.4-.3 1-.4 1.5-.4.9 0 1.5.3 2 .8s.7 1.3.7 2.3v.7h-4c.1.4.2.7.5 1 .3.3.6.4 1 .4.7 0 1.2-.2 1.5-.7l.8.9c-.3.4-.6.6-1 .8s-.7.5-1.2.5zm-.2-5.2c-.3 0-.6.1-.8.3-.2.2-.3.6-.4 1h2.4v-.1c0-.4-.1-.7-.3-.9-.2-.2-.5-.3-.9-.3z" />
          <path d="M494.8 235.8h-.6c-.6 0-1.1.2-1.3.7v4.1h-1.7v-6.3h1.6v.8c.3-.6.8-.9 1.4-.9.2 0 .4 0 .5.1l.1 1.5z" />
          <path d="M499.1 240.5c-.1-.2-.1-.3-.2-.6-.4.5-.9.7-1.6.7-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.8-.6-1.4 0-.7.2-1.2.7-1.5s1.2-.5 2.2-.5h.8v-.4c0-.3-.1-.5-.2-.7-.1-.2-.4-.3-.7-.3s-.5.1-.7.2c-.2.1-.2.3-.2.6h-1.7c0-.4.1-.7.3-1 .2-.3.5-.6 1-.7s.9-.3 1.4-.3c.8 0 1.4.2 1.9.6.5.4.7.9.7 1.7v2.7c0 .6.1 1.1.3 1.4v.1h-1.9v-.1zm-1.4-1.2c.3 0 .5-.1.7-.2.2-.1.4-.3.5-.4v-1.1h-.6c-.8 0-1.3.3-1.4.9v.1c0 .2.1.4.2.5.1.1.4.2.6.2z" />
          <path d="M503.9 232.6v1.6h1.1v1.2h-1.1v3.2c0 .2 0 .4.1.5.1.1.3.2.5.2h.5v1.3c-.3.1-.7.2-1 .2-1.2 0-1.8-.6-1.8-1.8v-3.4h-.9v-1.2h.9v-1.6h1.7v-.2z" />
          <path d="M505.9 232.5c0-.3.1-.5.3-.6.2-.1.4-.2.7-.2.3 0 .5.1.7.2.2.1.3.4.3.6 0 .3-.1.5-.3.6-.2.1-.4.2-.7.2-.3 0-.5-.1-.7-.2-.2-.1-.3-.3-.3-.6zm1.8 8H506v-6.3h1.7v6.3z" />
          <path d="M508.9 237.3c0-.6.1-1.2.4-1.7.3-.5.6-.9 1-1.1.4-.2 1-.4 1.6-.4.9 0 1.6.3 2.1.8s.8 1.2.9 2.1v.4c0 1-.3 1.8-.8 2.3s-1.3.9-2.2.9-1.6-.3-2.2-.9c-.6-.6-.8-1.3-.8-2.4zm1.7.1c0 .6.1 1.1.3 1.4.2.3.6.5 1 .5s.7-.2 1-.5c.2-.3.3-.8.3-1.5 0-.6-.1-1-.3-1.4-.2-.3-.6-.5-1-.5s-.7.2-1 .5c-.2.3-.3.8-.3 1.5z" />
          <path d="M517.5 234.2l.1.7c.5-.6 1.1-.8 1.8-.8s1.2.2 1.5.6c.3.4.5 1 .5 1.8v4.1h-1.7v-4.1c0-.4-.1-.6-.2-.8-.2-.2-.4-.2-.8-.2-.5 0-.8.2-1.1.6v4.5h-1.7v-6.3h1.6v-.1z" />
          <path d="M526.3 240.5c-.1-.2-.1-.3-.2-.6-.4.5-.9.7-1.6.7-.6 0-1.1-.2-1.5-.5s-.6-.8-.6-1.4c0-.7.2-1.2.7-1.5s1.2-.5 2.2-.5h.8v-.4c0-.3-.1-.5-.2-.7s-.4-.3-.7-.3c-.3 0-.5.1-.7.2-.2.1-.2.3-.2.6h-1.7c0-.4.1-.7.3-1 .2-.3.5-.6 1-.7s.9-.3 1.4-.3c.8 0 1.4.2 1.9.6.5.4.7.9.7 1.7v2.7c0 .6.1 1.1.3 1.4v.1h-1.9v-.1zm-1.4-1.2c.3 0 .5-.1.7-.2.2-.1.4-.3.5-.4v-1.1h-.6c-.8 0-1.3.3-1.4.9v.1c0 .2.1.4.2.5.1.1.4.2.6.2z" />
          <path d="M530.9 240.5h-1.7v-9h1.7v9z" />
        </g>
      </g>
      <g id="hi-3" className="animated-slide">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M540 384.7c0 1.1-.9 2-2 2H36c-1.1 0-2-.9-2-2v-80c0-1.1.9-2 2-2h502c1.1 0 2 .9 2 2v80z"
        />
        <path
          fill="#738199"
          d="M137.9 324c0 1-.8 1.8-1.8 1.8H51.3c-1 0-1.8-.8-1.8-1.8v-5.1c0-1 .8-1.8 1.8-1.8H136c1 0 1.8.8 1.8 1.8v5.1z"
        />
        <path
          fill="none"
          stroke="#3BD671"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
          d="M49.6 366.9c.6-.3 2.4-3.3 2.4-4.1s1 3.5 1.8 3.8 2.8-1.8 3.1-2.1 2.7 2.6 3 2.6 1-2.6 1-2.6 1.6 3.3 2.1 2.8 3-6 3-6 1.6 5.6 2.1 4.4 2.4-4.8 2.6-5.4 1.6 6.8 1.9 5.9 2.6-5.6 2.8-7.2 1.9 7.1 2.3 7.1 2.9-6 2.9-7.3 1.4 7.4 1.9 7.4 2.6-5.6 2.8-7.2 1.2 5.7 1.6 6.2 1.1-1.1 1.6-1.6.9 1.7 1.4 1.7 2.1-3.1 2.1-4 1.4 4.7 1.9 4.3 3.1-11.4 3.1-13 .4 12 1.1 13 3.9-10.4 3.8-13.3 1.1 13.5 1.6 13.5 4.8-8.8 4.2-14.4 3.3 15.1 3.3 15.1 3.4-11.4 3.3-14.5 1.7 16.5 2.6 14.8 1.9-4 2.2-7.1 1-5 1.9-4.3 2 5 2 6.1 1.6 5.3 3 4.9 2.9-1.2 3.4-2.4 4 .4 4.7 2 2.3 1.1 2.6.2 1.9-.9 2.1 0 1.3.1 2.1-1.7 2.4-1 2.8.6 2.4 1.7 2.8.2 1.7-.3 2.8 1.7 2 .5 2.2-.9.8-1.3 1.6-1.4 1.8.5 2 1.3 1.3 1.4 1.8 1.4 1.9-.3 2-2.6.7-6.4.9-7.7 1.8-.8 2.7 4.4 1.7 5.7 2.3 5.5 2.4-1.5 2.6-3.4 1-2.3 2.4-.5 3.7 4.1 5.3 3.8 1.2-.2 1.9-1.9 2 .7 2.6 1.7 1.3.3 2.1-.9.8-1.7 1.2-1.3 2.8.5 2.8-.5 1.2.3 1.4 1.1 1.3-2.5 1.4-5.8 1.6.7 1.8 1 1.3 3.1 1.6 1 1.2-5.4 1.3-6 .5.2 1 2.4 2.4 6.4 3.8 1.6 1.9-6.1 2-7 1.3 11.3 1.8 11.5 1.4 1.4 2.2-8.4 1-17.5 1-17.5.5 25.1 1.3 26 1.6-1 2.4-5 1.3-7 2.3-7 1.3 4.2 1.4 6.1.9 7.1.9 7.1l1.4-9.4s1.6-6.8 2.6-.5.2 10.4.6 10.6 1.7 2.4 1.9-2.3.6-9 .6-9 .9-4.4 1.8-.2 1.8 6 2.1 6 .8-1.8 1.3-4.8 2.2-4.9 2.8-1.9.7 11.6.9 12.2 1.2 1.7 1.9.8 2.2-2.4 2.8-1.9.6 2.2 2.9 1.7 3.5-2.3 5-1.1 3.9 2 5.3 1.5 2-.7 3-.4 4.1.6 5.1.3 2.6-.4 3.4 0 2.9.6 3.8.1 2.5-.4 3 0 2.7.4 3.3-.1 2.7.1 3.2.2 5 .1 5 .1 2.5.2 2.8-.1 1.8-.4 2.5.1 2.7.6 3.3 0 3.6-.3 4.1.1 3.7.5 4.1-.1 3.3-.6 4.1-.1 2.9.8 3.8.3 2.8-.7 3.7-.4 2.7 1 3.9.4 4.1-.5 5.3-.1 4.7 0 4.7 0h128.8s2.2-.2 3.3-.4 3.4 0 4.6.3 8.1.1 8.1.1h8.4s2.9-2.4 3.6-3.7 2.8-1.8 3.5.5.7 3.2 5.4 3.2h14s1.8-2.8 2.5-2.6 2.3 2.3 2.6 2.6 2.7 0 2.9-.1.5-.1.7.3 1.2.8 1.6-.1 2.5-3.2 3-2.5 1.5 3.4 2.1 2.9 1.7-3.2 2.2-5.8.6-3.9.9-1.8.7 7 1.5 6.9 2.6-1.3 3.1-3.8 1-4 1.1-5 1.2 7.8 1.6 8.3"
        />
      </g>
      <g id="hi-slc">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M391 223.3c0 1.1-.9 2-2 2h-50.3c-1.1 0-2-.9-2-2V173c0-1.1.9-2 2-2H389c1.1 0 2 .9 2 2v50.3z"
        />
        <g>
          <g fill="#E01E5A">
            <path d="M355.8 201.8c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9c0-1.6 1.3-2.9 2.9-2.9h2.9v2.9z" />
            <path d="M357.3 201.8c0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9v7.3c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9v-7.3z" />
          </g>
          <g fill="#36C5F0">
            <path d="M360.2 190.2c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9v2.9h-2.9z" />
            <path d="M360.2 191.6c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9h-7.3c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9h7.3z" />
          </g>
          <g fill="#2EB67D">
            <path d="M371.9 194.6c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9c0 1.6-1.3 2.9-2.9 2.9h-2.9v-2.9z" />
            <path d="M370.4 194.6c0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9v-7.3c0-1.6 1.3-2.9 2.9-2.9 1.6 0 2.9 1.3 2.9 2.9v7.3z" />
          </g>
          <g fill="#ECB22E">
            <path d="M367.5 206.3c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9v-2.9h2.9z" />
            <path d="M367.5 204.8c-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9h7.3c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9h-7.3z" />
          </g>
        </g>
      </g>
      <g id="hi-tlg">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M317.9 169.6c0 1-.8 1.8-1.8 1.8h-44.4c-1 0-1.8-.8-1.8-1.8v-44.4c0-1 .8-1.8 1.8-1.8h44.4c1 0 1.8.8 1.8 1.8v44.4z"
        />
        <g>
          <linearGradient
            id="a"
            x1={-136.4766}
            x2={-136.4868}
            y1={539.3398}
            y2={539.3159}
            gradientTransform="matrix(595.2803 0 0 -595.2803 81539.9688 321197.0313)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#37aee2" />
            <stop offset={1} stopColor="#1e96c8" />
          </linearGradient>
          <circle cx={293.9} cy={147.4} r={12} fill="url(#a)" />
          <path
            fill="#C8DAEA"
            d="M291.7 152.9c-.4 0-.3-.1-.5-.5l-1.1-3.8 8.8-5.2"
          />
          <path fill="#A9C9DD" d="M291.7 152.9c.3 0 .4-.1.6-.3l1.6-1.6-2-1.2" />
          <linearGradient
            id="b"
            x1={-136.4219}
            x2={-136.4142}
            y1={539.5762}
            y2={539.5615}
            gradientTransform="matrix(323.6656 0 0 -271.4722 44449.6211 146627.7969)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#eff7fc" />
            <stop offset={1} stopColor="#fff" />
          </linearGradient>
          <path
            fill="url(#b)"
            d="M291.9 149.8l4.8 3.6c.6.3 1 .1 1.1-.5l2-9.3c.2-.8-.3-1.2-.8-.9l-11.6 4.5c-.8.3-.8.8-.1 1l3 .9 6.9-4.3c.3-.2.6-.1.4.1"
          />
        </g>
      </g>
      <g id="hi-em">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M401.4 138.4c0 .8-.7 1.5-1.5 1.5h-37.4c-.8 0-1.5-.7-1.5-1.5V101c0-.8.7-1.5 1.5-1.5h37.4c.8 0 1.5.7 1.5 1.5v37.4z"
        />
        <circle cx={374.3} cy={115.8} r={4.6} fill="#3BD671" />
        <g>
          <path
            fill="#FFF"
            d="M372.9 114.9c.5.3 7.5 4.1 7.8 4.2s.6.2.9.2.7-.1.9-.2c.3-.1 7.3-3.9 7.8-4.2s1-1.1.1-1.1h-17.6c-.9 0-.4.9.1 1.1zm17.7 2.1c-.6.3-7.7 4-8 4.2-.4.2-.6.2-.9.2s-.6 0-.9-.2c-.4-.2-7.4-3.9-8-4.2-.4-.2-.4 0-.4.2v7.6c0 .4.6 1 1 1H390c.5 0 1-.6 1-1v-7.6c0-.2 0-.4-.4-.2z"
          />
        </g>
      </g>
      <g id="hi-sms">
        <path
          fill="#212937"
          style={{
            filter: 'url(#dropshadow)',
          }}
          d="M463.1 182.6c0 .8-.7 1.5-1.5 1.5h-37.4c-.8 0-1.5-.7-1.5-1.5v-37.4c0-.8.7-1.5 1.5-1.5h37.4c.8 0 1.5.7 1.5 1.5v37.4z"
        />
        <g>
          <circle cx={449.3} cy={161.9} r={4.7} fill="#3BD671" />
          <path
            fill="#FFF"
            d="M447.4 152.4H439c-1.2 0-2.2 1-2.2 2.2v17.2c0 1.2 1 2.2 2.2 2.2h8.4c1.2 0 2.2-1 2.2-2.2v-17.2c0-1.2-1-2.2-2.2-2.2zm-4.2 20.7c-.8 0-1.6-.5-1.6-1.1 0-.6.7-1.1 1.6-1.1.8 0 1.5.5 1.5 1.1.1.6-.6 1.1-1.5 1.1zm4.6-3.3h-9.2v-14.5h9.2v14.5z"
          />
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Image);