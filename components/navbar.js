import Logo from './logo'
import { forwardRef } from 'react'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import ThemeToggleButton from './theme-toggle-button'

const Linkitem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteALpha.900')

  return (
    // <Link href={href}>
    //   <ChakraLink
    //     p={2}
    //     bg={active ? 'glassTeal' : undefined}
    //     color={active ? '#202023' : inactiveColor}
    //   >
    //     {children}
    //   </ChakraLink>
    // </Link>
    <Link 
      as={NextLink}
      href={href}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      display='flex'
      alignItems='center'
      gap={1}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = porps => {
  const { path } = porps

  return (
    <Box
      postition='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...porps}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Linkitem href='/works' path={path}>
            Works
          </Linkitem>
          <Linkitem href='/Post' path={path}>
            Post
          </Linkitem>
          <Linkitem
            target='_blank'
            href='https://github.com/bcondict/protfolio_project_V1'
            path={path}
          >
            <IoLogoGithub />
            Source
          </Linkitem>
        </Stack>

        <Box flex={1} align='right'>
          <ThemeToggleButton /> 
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                arial-label='Options'
              />
              <MenuList>
                {/* <NextLink href='/' passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink> */}
                <MenuItem as={MenuLink} href='/'>About</MenuItem>
                <MenuItem as={MenuLink} href='/works'>Works</MenuItem>
                <MenuItem as={MenuLink} href='/post'>Post</MenuItem>
                <MenuItem
                  target='_blank'
                  as={MenuLink}
                  href='https://github.com/bcondict/protfolio_project_V1'
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
