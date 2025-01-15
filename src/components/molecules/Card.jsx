const Card = ({ title, path, content, publish_date, tags }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden px-6 py-3 shadow-lg bg-white">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <div className="font-semibold text-lg capitalize mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
          <div className="text-sm text-gray-500">{publish_date}</div>
        </div>

        <div className="flex flex-col mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-200 text-blue-800 py-1 px-3 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
          <a href={path} className="text-blue-500 hover:underline flex items-center">
            <span>Read More</span>
            <span className="ml-2">&#8594;</span> {/* Ikon panah menggunakan karakter Unicode */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
