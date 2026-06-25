function Colon1Container({
  className = '',
  bgClassName = '',
  style,
  children,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  return (
    <div
      className={`absolute z-30 cursor-pointer pointer-events-auto ${bgClassName} ${className}`}
      style={{
        ...style,
        transform: `${style?.transform ?? ''} rotate(${style?.rotation ?? 0}deg)`.trim(),
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children || <div className="h-full w-full rounded-md" />}
    </div>
  )
}

export default Colon1Container
