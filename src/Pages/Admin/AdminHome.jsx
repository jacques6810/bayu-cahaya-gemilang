import React from "react";
import AdminNavbar from "../../Components/Admin/AdminNavbar";
import BackgroundSectionOne from "../../assets/HomeBackground.jpg";
import BackgroundSectionTwo from "../../assets/HeroImage.png";
import "../../App.css";

function AdminHome() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex text-center items-center justify-center p-4">
      <AdminNavbar />

      <div className="container mx-auto p-5 mt-30 relative">
        {/* Section 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 pb-10 relative">
          <div className="overflow-x-auto">
            {/* Header Section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-center tracking-widest font-semibold py-2 px-6 text-sm md:py-2 md:px-8 md:text-base rounded-lg w-fit mx-auto">
              Section 1
            </div>

            {/* Table */}
            <table className="min-w-full bg-white mt-10">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No.</th>
                  <th className="py-2 px-4 border-b">Tag HTML</th>
                  <th className="py-2 px-4 border-b">Content</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">img</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={BackgroundSectionOne}
                      alt=""
                      className="h-25 w-50 mx-auto rounded-lg shadow-lg"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">h1</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <h1>BAYU CAHAYA GEMILANG</h1>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">p</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <p>Bangun rumah impian anda menjadi kenyataan.</p>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 pb-10 mt-30 relative">
          <div className="overflow-x-auto">
            {/* Header Section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-center tracking-widest font-semibold py-2 px-6 text-sm md:py-2 md:px-8 md:text-base rounded-lg w-fit mx-auto">
              Section 2
            </div>

            {/* Table */}
            <table className="min-w-full bg-white mt-10">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No.</th>
                  <th className="py-2 px-4 border-b">Tag HTML</th>
                  <th className="py-2 px-4 border-b">Content</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">img</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={BackgroundSectionTwo}
                      alt=""
                      className="h-50 w-50 mx-auto rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">h1</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <h1>Bangun Rumah Impian Anda Menjadi Kenyataan</h1>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">p</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 pb-10 mt-30 relative">
          <div className="overflow-x-auto">
            {/* Header Section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-center tracking-widest font-semibold py-2 px-6 text-sm md:py-2 md:px-8 md:text-base rounded-lg w-fit mx-auto">
              Section 3
            </div>

            {/* Table */}
            <table className="min-w-full bg-white mt-10">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No.</th>
                  <th className="py-2 px-4 border-b">Tag HTML</th>
                  <th className="py-2 px-4 border-b">Content</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">img</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={BackgroundSectionOne}
                      alt=""
                      className="h-25 w-50 mx-auto rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <div className="flex flex-col items-center">
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold mx-2 py-2 px-10 rounded-full mb-2">
                        Add
                      </button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-10 rounded-full">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">h1</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <h1>DEVELOPER</h1>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 pb-10 mt-30 relative">
          <div className="overflow-x-auto">
            {/* Header Section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white text-center tracking-widest font-semibold py-2 px-6 text-sm md:py-2 md:px-8 md:text-base rounded-lg w-fit mx-auto">
              Section 4
            </div>

            {/* Table */}
            <table className="min-w-full bg-white mt-10">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">No.</th>
                  <th className="py-2 px-4 border-b">Tag HTML</th>
                  <th className="py-2 px-4 border-b">Content</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">img</td>
                  <td className="py-2 px-4 border-b">
                    <img
                      src={BackgroundSectionOne}
                      alt=""
                      className="h-25 w-50 mx-auto rounded-lg"
                    />
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold mx-2 py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">h1</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <h1>Kontak Kami</h1>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">h1</td>
                  <td className="py-2 px-4 border-b truncate max-w-xs">
                    <h1>
                      We provide a complete service for the ale, purchase or
                      rental of real estate.
                    </h1>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-full">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
