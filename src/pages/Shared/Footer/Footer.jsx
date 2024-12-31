const Footer = () => {
  return (
    <footer>
      <section className="flex">
        <div className="bg-neutral text-neutral-content flex-1 justify-center items-center flex flex-col py-12">
          <h2 className="text-2xl py-2">CONTACT US</h2>
          <p className="w-48 mx-auto text-center text-sm">
            123 ABS Street, Uni 21, Bangladesh +88 123456789 Mon - Fri: 08:00 -
            22:00 Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="p-4 text-white footer-center bg-gray-950/90 flex-1 py-12">
          <h2 className="text-2xl py-2">Follow US</h2>
          <p className="w-48 mx-auto text-center text-sm">
            Join us on social media
          </p>
          <div className="flex w-10 items-center justify-center space-x-3">
            <img src='https://img.icons8.com/?size=100&id=118497&format=png&color=000000' alt="" />
            <img src='https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000' alt="" />
            <img src='https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000' alt="" />
          </div>
        </div>
      </section>
      <div className="bg-gray-950 p-4 footer-center text-white flex-1">
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
