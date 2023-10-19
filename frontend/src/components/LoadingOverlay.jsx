/**
 * 
 * @param {{loading: boolean}} props 
 * @returns 
 */
const LoadingOverlay = ({ loading }) => {
  return <>
    {loading && <div className='position-absolute d-flex justify-content-center align-items-center top-0 bottom-0 start-0 end-0 bg-black opacity-25 rounded-2'>
      <div class="spinner-border text-white" role="status">
        <span class="sr-only"></span>
      </div>
    </div>}</>
};

export default LoadingOverlay;