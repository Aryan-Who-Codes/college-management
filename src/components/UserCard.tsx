import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl sm:rounded-2xl odd:bg-gradient-to-br odd:from-college-primary odd:to-college-primary-dark even:bg-gradient-to-br even:from-college-gold even:to-college-gold-dark hover:scale-105 hover:shadow-2xl active:scale-95 transition-all duration-300 p-4 sm:p-6 flex-1 min-w-[120px] sm:min-w-[130px] md:min-w-[150px] text-white relative overflow-hidden touch-manipulation">
      {/* Background decoration - responsive sizes */}
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full -translate-y-6 translate-x-6 sm:-translate-y-8 sm:translate-x-8"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-white/5 rounded-full translate-y-4 -translate-x-4 sm:translate-y-6 sm:-translate-x-6"></div>
      
      <div className="flex justify-between items-center relative z-10">
        <span className="text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm text-white rounded-full px-2 py-1 sm:px-3 sm:py-1 font-semibold border border-white/30">
          2025/26
        </span>
        <Image 
          src="/more.png" 
          alt="more" 
          width={18} 
          height={18}
          className="sm:w-5 sm:h-5 opacity-80 hover:opacity-100 active:opacity-60 transition-opacity cursor-pointer filter brightness-0 invert"
        />
      </div>
      
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-4 sm:my-6 relative z-10 leading-tight">1,234</h1>
      <h2 className="capitalize text-xs sm:text-sm font-medium text-white/90 relative z-10 truncate">{type}s</h2>
    </div>
  );
};

export default UserCard;