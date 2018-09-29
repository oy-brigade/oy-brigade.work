interface HomeWorkProps {
  title: string;
  date: string;
};

export function HomeWorkImage(props) {
  const { src } = props;

  return <div><img alt="" src={src} /></div>;
}

export default function HomeWork(props) {
  const { title, date, children } = props;

  return (
    <div class="m-home-work">
      <div class="m-home-work__images">
        {children}
      </div>

      <footer class="m-home-work__info">
        <div class="m-home-work__title">{title}</div>
        <div class="m-home-work__date">{date}</div>
      </footer>
    </div>
  );
}
