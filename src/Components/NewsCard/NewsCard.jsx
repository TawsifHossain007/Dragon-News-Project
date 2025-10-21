import { Link } from "react-router";
import { Eye, Share2, Bookmark } from "lucide-react";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-2xl mt-3">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(news.author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm">
            <Bookmark size={18} />
          </button>
          <button className="btn btn-ghost btn-sm">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-4">
        <h2 className="text-lg font-bold text-gray-900 hover:text-primary cursor-pointer leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 py-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="w-full rounded-lg object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 pb-3">
        <p className="text-gray-600 text-sm">
          {details.slice(0, 200)}...
          <Link
            to={`/news-details/${id}`}
            className="text-primary font-semibold hover:underline ml-1"
          >
            Read More
          </Link>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-t-gray-300 px-5 py-3">
        <div className="flex items-center gap-1">
          <div className="rating rating-sm">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${id}`}
                className="mask mask-star-2 bg-orange-400"
                checked={i + 1 === rating.number}
                readOnly
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{rating.number.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <Eye size={16} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
