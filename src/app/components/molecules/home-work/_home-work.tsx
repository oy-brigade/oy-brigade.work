interface HomeWorkProps {
  title: string;
  date: string;
};

export default function HomeWork(props) {
  const { title, date } = props;

  return (
    <div class="m-home-work">
      <div class="m-home-work__images">

      </div>

      <footer class="m-home-work__info">
        <div class="m-home-work__title">{title}</div>
        <div class="m-home-work__date">{date}</div>
      </footer>
    </div>
  );
}
