import useCopyToClipboard from "../hooks/useCopyToClipboard";

function CopyToClipboard() {
  const [copyToClipboard, { value, success }] = useCopyToClipboard();
  const textToCopy = "Hello, test!";

  return (
    <div>
      <p>Text to copy: {textToCopy}</p>
      <button onClick={() => copyToClipboard(textToCopy)}>
        Copy to Clipboard
      </button>
      {success !== undefined && (
        <p>
          {success
            ? `Copied "${value}" to clipboard!`
            : "Copying to clipboard failed."}
        </p>
      )}
    </div>
  );
}

export default CopyToClipboard;
