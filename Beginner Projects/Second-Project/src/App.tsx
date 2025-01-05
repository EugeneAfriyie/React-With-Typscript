import React, { useState } from 'react'
import Navigation from './Components/Navigation'
import PeolpleToFollow from './Components/PeopleToFollow'
import TrendsList from './Components/TrendList'
import TopicsList from './Components/TopicsList'
import { BlogProvider } from './Shared/BlogContextType'
import { IoMdAddCircle } from 'react-icons/io'
import { Blog } from './Components/types'

const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setModalOpen(true);
  };
  return (
    <div>
      <BlogProvider>
      <Navigation/>
      <div className="flex justify-center">
        {/* main area */}

        <section className="mx-auto p-5  border-2">
          <div className="">
            <button onClick={openModalForNewBlog} className='ml-7 bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4'>
              Add New Blog <IoMdAddCircle className='ml-[.5rem]'/>
            </button>



            {/* Article */}

            <ArticleList onEdit={openModalForEdit} />
              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
          </div>
        </section>

        <div className="w-[30%]">
          <PeolpleToFollow/>
          <TrendsList/>
          <TopicsList/>
        </div>
      </div>
      </BlogProvider>
    </div>
  )
}
 
export default App