import { useEffect, useRef } from "react";

let cloudinary: {
  createUploadWidget: (
    arg0: { cloudName: unknown; uploadPreset: unknown },
    arg1: (error: any, result: any) => void
  ) => any;
};

const UploadWidget = ({ children, onUpload }) => {
  const widget = useRef();
  useEffect(() => {
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }

    function onIdle() {
      if (!widget.current) {
        widget.current = createWidget();
      }
    }

    "requestIdleCallback" in window
      ? requestIdleCallback(onIdle)
      : setTimeout(onIdle, 1);

    return () => {
      widget.current?.destroy();
      widget.current = undefined;
    };
  }, []);

  function createWidget() {
    const cloudName = import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env
      .VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      console.warn(`Kindly ensure you have the cloudName and UploadPreset 
      setup in your .env file at the root of your project.`);
    }
    const options = {
      cloudName,
      uploadPreset,
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (
        (error || result.event === "success") &&
        typeof onUpload === "function"
      ) {
        onUpload(error, result, widget);
      }
    });
  }

  function open() {
    if (!widget.current) {
      widget.current = createWidget();
    }
    widget.current && widget.current.open();
  }
  return <>{children({ cloudinary, widget, open })}</>;
};
export default UploadWidget;
