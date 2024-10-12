export function QuadGallery() {
    const data = [
      {
        imageLink:
          "/img1.jpeg",
      },
      {
        imageLink:
          "/img2.jpeg",
      },
      {
        imageLink:
          "/img3.jpeg",
      },
      {
        imageLink:
          "/img4.jpeg",
      },
      {
        imageLink:
          "/img5.jpeg",
      },
      {
        imageLink:
          "/img6.jpeg",
      },
      {
        imageLink:
          "/img7.jpeg",
      },
    ];

    const data2 = [
    {
        imageLink:
            "/img8.jpeg",
        },
        {
        imageLink:
            "/img9.jpeg",
        },
        {
        imageLink:
            "/img10.jpeg",
        },
        {
        imageLink:
            "/img11.jpeg",
        },
        {
        imageLink:
            "/img12.jpeg",
        },
        {
        imageLink:
            "/img13.jpeg",
        },
        {
        imageLink:
            "/img14.jpeg",
        },
    ];
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2">
            <div className= "flex flex-col flex-wrap">
                {data.map(({ imageLink }, index) => (
                <div key={index} className="py-1">
                    <img
                    className="rounded-lg"
                    src={imageLink}
                    alt=""
                    />
                </div>
                ))}
            </div>
            <div className="flex flex-col flex-wrap">
                {data2.map(({ imageLink }, index) => (
                    <div key={index} className="py-1">
                    <img
                        className="rounded-lg"
                        src={imageLink}
                        alt=""
                    />
                    </div>
                ))}
            </div>
        </div>
    );
  }