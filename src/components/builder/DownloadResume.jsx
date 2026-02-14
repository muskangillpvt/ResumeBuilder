import html2pdf from "html2pdf.js";

function DownloadResume(){
    const handleDownload = async () => {
        const element = document.getElementById("resume-preview");
        if (!element) return;

        element.classList.add("pdf-mode");

        const options = {
            margin: 0,
            filename: "myresume.pdf",
            image: { type: "jpeg", quality: 1 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                logging: false
            },
            jsPDF: {
                unit: "mm",
                format: "a4",
                orientation: "portrait",
            },
        };

        await html2pdf().set(options).from(element).save();

        element.classList.remove("pdf-mode");
    };

    return(
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Download Your Resume</h2>
            <p className="text-sm text-gray-600 mb-6">
                You resume will be downloaded to your laptop. It is not saved on the website.
            </p>
            <button onClick={handleDownload} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Download Resume (PDF)
            </button>
        </div>
    )
}
export default DownloadResume;