import image from "@img/space.jpg";
import PictureComponent from "@/../plugins/PictureComponent";
import "./Header.scss";

export function Header() {
  return /*html*/ `
    <header>
      <h1 class="header">My header</h1>
        <!-- <img src="${image}" alt="Space image" width="200" height="200" /> -->
      ${PictureComponent({ src: image, alt: "space image", className: "picture", width: "200px", height: "200px" })}
    </header>
  `;
}
