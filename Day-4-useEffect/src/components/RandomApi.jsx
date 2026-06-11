import { useState, useEffect } from "react";

const RandomApi = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=10"
        );
        const data = await response.json();
        setImages(data);
      } catch (err) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;              

  return (
    <div>
      <h1>Random Images</h1>
      {images.map((image) => (
        <div key={image.id}>
          <img src={image.download_url} alt={image.author} width="300" />
          <p>{image.author}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomApi;
