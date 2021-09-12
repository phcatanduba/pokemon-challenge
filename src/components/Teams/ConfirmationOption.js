export default function ConfimartionOption({ color, confirm }) {
  return (
    <div onClick={confirm}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill={color} />
        <path
          d="M16.5434 25.3844L11.6622 20.5032L10 22.1537L16.5434 28.6971L30.59 14.6505L28.9395 13L16.5434 25.3844Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
