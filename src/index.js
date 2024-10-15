import { CarWriter } from '@ipld/car';
import { CID } from 'multiformats/cid';
import { sha256 } from 'multiformats/hashes/sha2';

document.getElementById('convertButton').addEventListener('click', async () => {
  const fileInput = document.getElementById('fileInput');
  if (fileInput.files.length === 0) {
    alert('Please select a file!');
    return;
  }

  const file = fileInput.files[0];

  try {
    // Read the file as ArrayBuffer
    const arrayBuffer = await readFileAsArrayBuffer(file);
    const fileContent = new Uint8Array(arrayBuffer);

    // Generate the CID
    const cid = await generateCID(fileContent);

    // Create a CAR file using CarWriter
    const { writer, out } = CarWriter.create([cid]);

    writer.put({ cid, bytes: fileContent });
    writer.close();

    // Collect CAR chunks into a Blob
    const carChunks = [];
    for await (const chunk of out) {
      carChunks.push(chunk);
    }

    const carBlob = new Blob(carChunks, { type: 'application/car' });

    // Generate download link
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = URL.createObjectURL(carBlob);
    downloadLink.download = `${file.name}.car`;
    downloadLink.style.display = 'block';
    downloadLink.innerText = 'Download CAR File';
  } catch (error) {
    console.error('Error creating CAR file:', error);
  }
});

// Helper function to read file as ArrayBuffer
function readFileAsArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

// Generate a CID using sha256
async function generateCID(content) {
  const hash = await sha256.digest(content);
  return CID.createV1(0x55, hash);
}


