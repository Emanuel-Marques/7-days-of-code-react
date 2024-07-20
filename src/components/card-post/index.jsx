import PropTypes from 'prop-types';
export function CardPost({ message, by, when }) {
  return (
    <div className="w-full bg-slate-50 rounded-md border border-custom-b-gray py-4 px-4 flex flex-col justify-between gap-8">
      <p className="text-base text-custom-gray">
        {message}
      </p>
      <div className="flex justify-between max-sm:flex-wrap">
        <span className="text-custom-blue">
          {by}
        </span>
        <span className="text-custom-b-gray">
          {new Date(when).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

CardPost.propTypes = {
  message: PropTypes.string.isRequired,
  by: PropTypes.string.isRequired,
  when: PropTypes.number.isRequired,
}