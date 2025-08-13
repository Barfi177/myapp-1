import Image from 'next/image';

const ImageHero = () => {
  return (
    <div className="hero">
      <Image
        src="/ai-image-hero.jpg"
        alt="AI Image Hero"
        width={1200}
        height={600}
        layout="responsive"
        objectFit="cover"
      />
      <div className="hero-overlay">
        <h1>Unlock the Power of AI-Generated Images</h1>
        <p>Discover the future of visual content creation</p>
      </div>
    </div>
  );
};

export default ImageHero;