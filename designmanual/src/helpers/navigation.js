// This is the order of our views
const viewOrder = [
    'home',
    'tableofcontent',
    'introduction',
    'setup-installation',
    'setup-structure',
    'setup-firebase',
    'setup-framework',
    'manage-component',
    'manage-import',
    'manage-styling',
    'manage-routing',
    'manage-JSON',
    'manage-JSON-template',
    'maintenance-expand',
    'troubleshooting'
]

// Function to get the next view name
export function getNextView(currentViewName) {
    const currentIndex = viewOrder.indexOf(currentViewName)
    const nextIndex = currentIndex + 1

    if (nextIndex < viewOrder.length) {
        return viewOrder[nextIndex]
    }

    return null // No next view available
}

// Function to get the previous view name
export function getPreviousView(currentViewName) {
    const currentIndex = viewOrder.indexOf(currentViewName)
    const previousIndex = currentIndex - 1

    if (previousIndex >= 0) {
        return viewOrder[previousIndex]
    }

    return null // No previous view available
}

// NEW FUNCTION: Get current page number and total pages
export function getPageInfo(currentViewName) {
  const currentIndex = viewOrder.indexOf(currentViewName)
  const currentPage = currentIndex + 1  // +1 because arrays start at 0
  const totalPages = viewOrder.length
  
  return {
    currentPage: currentPage,
    totalPages: totalPages
  }
}