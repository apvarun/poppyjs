const defaultOptions = Object.freeze({
  title: {
    text: "",
    avatar: "",
    color: "#444"
  },
  content: "",
  cta: {
    text: "",
    url: "",
    color: "#222",
    newtab: false,
    onclick: () => {}
  },
  coverImage: "",
  position: "bottomRight",
  delay: 0,
  closeAfter: null
});

export class Poppy {
  constructor(options) {
    this.state = {
      ...defaultOptions,
      ...options,
      title: {
        ...defaultOptions.title,
        ...options.title
      },
      cta: {
        ...defaultOptions.cta,
        ...options.cta
      }
    };
    this.element = null;
  }
  show() {
    const createContainer = position => {
      const container = document.createElement("div");
      container.style.maxWidth = "300px";
      container.style.width = "100%";
      container.style.margin = "10px";
      container.style.borderRadius = "5px";
      container.style.overflow = "hidden";
      container.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
      container.style.position = "fixed";
      container.style.backgroundColor = "#FFF";
      container.style.fontFamily =
        '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      if (position === "topLeft") {
        container.style.top = "0";
        container.style.left = "0";
      } else if (position === "topRight") {
        container.style.top = "0";
        container.style.right = "0";
      } else if (position === "bottomLeft") {
        container.style.bottom = "0";
        container.style.left = "0";
      } else if (position === "bottomRight") {
        container.style.bottom = "0";
        container.style.right = "0";
      }

      return container;
    };
    const createPopup = options => {
      const title = createTitle(options.title);
      const image = createCoverImage(options.coverImage);
      const content = createContent(options.content);
      const cta = createCTA(options.cta);

      const components = [title, image, content, cta].filter(
        component => !!component
      );
      const fragment = createFragmentContainer();
      components.forEach(component => fragment.appendChild(component));
      return fragment;
    };
    const createTitle = title => {
      if (!title.text) return null;
      const titleContainer = document.createElement("div");
      titleContainer.style.background = title.color;
      titleContainer.style.color = "#FFF";
      titleContainer.style.padding = "15px 10px";
      titleContainer.style.fontWeight = "500";
      titleContainer.style.display = "grid";
      titleContainer.style.gridTemplateColumns = "1fr 24px";
      titleContainer.style.alignItems = "center";

      const textContainer = document.createElement("span");
      textContainer.style.display = "flex";
      textContainer.style.alignItems = "center";

      if (title.avatar) {
        const avatarContainer = document.createElement("img");
        avatarContainer.style.width = "25px";
        avatarContainer.style.height = "25px";
        avatarContainer.style.borderRadius = "5px";
        avatarContainer.style.objectFit = "cover";
        avatarContainer.style.marginRight = "5px";
        avatarContainer.src = title.avatar;
        textContainer.appendChild(avatarContainer);
      }

      textContainer.innerHTML += title.text;
      titleContainer.appendChild(textContainer);

      titleContainer.appendChild(createCloseIcon());
      return titleContainer;
    };
    const createContent = content => {
      if (!content) return null;
      const contentContainer = document.createElement("div");
      contentContainer.style.padding = "10px";
      contentContainer.style.lineHeight = "1.5rem";

      contentContainer.innerHTML = content;
      return contentContainer;
    };
    const createCoverImage = image => {
      if (!image) return null;
      const imageContainer = document.createElement("img");
      imageContainer.style.width = "100%";
      imageContainer.style.maxHeight = "150px";
      imageContainer.style.objectFit = "cover";

      imageContainer.src = image;
      imageContainer.onerror = () => {
        imageContainer.style.display = "none";
        console.warn("Poppy: Cover image cannot be found.");
      };
      return imageContainer;
    };
    const createCTA = cta => {
      if (!cta || !cta.text || !cta.url) return null;
      const contentContainer = document.createElement("a");
      contentContainer.style.margin = "10px";
      contentContainer.style.padding = "10px";
      contentContainer.style.lineHeight = "1.5rem";
      contentContainer.style.background = cta.color;
      contentContainer.style.color = "#FFF";
      contentContainer.style.textAlign = "center";
      contentContainer.style.textDecoration = "none";
      contentContainer.style.cursor = "pointer";
      contentContainer.style.display = "block";
      contentContainer.style.borderRadius = "5px";

      contentContainer.innerText = cta.text;
      contentContainer.href = cta.url;
      if (cta.newtab) {
        contentContainer.target = "_blank";
        contentContainer.rel = "noopener noreferrer";
      }
      contentContainer.addEventListener("click", cta.onclick);

      return contentContainer;
    };
    const createCloseIcon = () => {
      // Close Icon
      const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-square">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="15"></line>
          <line x1="15" y1="9" x2="9" y2="15"></line>
        </svg>`;
      const closeIconContainer = document.createElement("span");
      closeIconContainer.style.cursor = "pointer";
      closeIconContainer.innerHTML = closeIcon;

      closeIconContainer.addEventListener("click", () => {
        if (this.element) {
          this.element.parentNode.removeChild(this.element);
        }
      });

      // OnClick Handler
      return closeIconContainer;
    };
    const createFragmentContainer = () => {
      return document.createDocumentFragment();
    };

    // Displaying poppy
    const popup = createPopup(this.state);
    this.element = createContainer(this.state.position);
    this.element.appendChild(popup);
    setTimeout(() => {
      document.body.appendChild(this.element);
      if (this.state.closeAfter) {
        if (typeof this.state.closeAfter !== "number") {
          console.warn("`closeAfter` should be an interger(in seconds)");
          return;
        }
        setTimeout(() => {
          this.close();
        }, this.state.closeAfter);
      }
    }, this.state.delay);
  }
  close() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}

export default Poppy;
