interface HomeWorkProps {
  title: string;
  date: string;
};

export function HomeWorkImage(props) {
  const { src } = props;

  return <div><img alt="image" src={src} /></div>;
}

export default function HomeWork(props) {
  const { title, date, children } = props;

  return (
    <div className="m-home-work">
      <div className="m-home-work__images">
        {children}
      </div>

      <footer className="m-home-work__info">
        <div className="m-home-work__title">{title}</div>
        <div className="m-home-work__date">{date}</div>
      </footer>
    </div>
  );
}
