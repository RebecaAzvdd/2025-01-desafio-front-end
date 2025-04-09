interface ButtonProps {
  type?: "button" | "submit";
  color?: string;         
  textColor?: string;    
  altura?: string;        
  largura?: string;       
  label: string;          
}

export default function Button({
  type = "button",
  color = "bg-[#0038B1]",
  textColor = "text-white",
  altura = "h-10",
  largura = "w-full",
  label,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${color} ${textColor} ${altura} ${largura} font-bold text-sm rounded-lg shadow-md hover:scale-105 transition-transform`}
    >
      {label}
    </button>
  );
}
