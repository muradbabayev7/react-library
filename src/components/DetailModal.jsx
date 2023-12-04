import React from "react";

const DetailModal = ({data}) => {
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style={{display: "flex", gap: "20px"}}>
                <div>
                    <img src={data.volumeInfo?.imageLinks?.smallThumbnail
            ? data.volumeInfo?.imageLinks?.smallThumbnail
            : "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg"} alt="" />
                </div>
                <div>
                    <h4>{data.volumeInfo?.title}</h4>
                    <p>{data.volumeInfo?.publishedDate}</p>
                    <p>{data.volumeInfo?.authors?.map((author,index)=>{
                        return <span key={index}>{author}</span>
                    })}</p>
                    <p>{data.volumeInfo?.description}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
