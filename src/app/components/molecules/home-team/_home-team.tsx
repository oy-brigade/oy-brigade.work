interface Contact {
  label: string;
  url: string;
}

interface MemberProps {
  name: string;
  role: string;
  twitter?: string;
  soundcloud?: string;
  pixiv?: string;
};

export function HomeTeamMember(props: MemberProps) {
  const { name, role, twitter, soundcloud, pixiv } = props;

  return (
  <div className="m-home-team__member">
    <div className="m-home-team__member-icon-wrapper">
      <img className="m-home-team__member-icon" alt="" src="" />
    </div>

    <div className="m-home-team__member-name">{name}</div>
    <div className="m-home-team__member-role">{role}</div>

    <ul className="m-home-team__member-contacts">
      {twitter ? <li><a href={`https://twitter.com/${twitter}`} target="_blank">@{twitter} (Twitter)</a></li> : null}
      {soundcloud ? <li><a href={`https://soundcloud.com/${soundcloud}`} target="_blank">{soundcloud} (SoundCloud)</a></li> : null}
      {pixiv ? <li><a href={`https://pixiv.me/${pixiv}`} target="_blank">{pixiv} (pixiv)</a></li> : null}
    </ul>
  </div>
  );
}

export default function HomeTeam(props) {
  return <div className="m-home-team">{props.children}</div>;
}
