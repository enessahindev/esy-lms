// Örnek kullanım
import CustomVideoPlayer from "./CustomVideoPlayer";

const Video = () => {
  return (
    <section>
      <CustomVideoPlayer
        url={"https://www.youtube.com/watch?v=xsuCZJNC4GU"}
        controls={true}
        width="640px"
        height="380px"
      />
    </section>
  );
};

export default Video;
